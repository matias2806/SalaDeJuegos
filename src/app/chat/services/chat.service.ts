import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Mensaje} from '../interface/mensaje.interface';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map'
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[] = [];

  constructor(private afs: AngularFirestore,  
     public AuthSvc:AuthService
    ) { }

  cargarMensajes(){
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha', 'desc').limit(25));

    return this.itemsCollection.valueChanges()
    .map( (mensajes: Mensaje[]) =>{
      console.log(mensajes);
      this.chats = [];
      for (let mensaje of mensajes){
        this.chats.unshift(mensaje);
      }
      return this.chats;
    })
  }

  agregarMensaje(texto:string){
    let mensaje:Mensaje ={
      nombre: this.AuthSvc.usuario.email,
      mensaje:texto,
      fecha: new Date().getTime(),
      uid: this.AuthSvc.usuario.uid,
    }
    return this.itemsCollection.add(mensaje);
  }
}
