import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Encuesta } from '../../../clases/Encuesta';
import 'rxjs/add/operator/map'
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  private dbpath = '/encuesta';
  private itemsCollection: AngularFirestoreCollection<Encuesta>;
  public encuestas: Encuesta[] = [];

  constructor(private afs: AngularFirestore, public AuthSvc: AuthService) { }

  cargarEncuestas() {
    this.itemsCollection = this.afs.collection<Encuesta>(this.dbpath);

    return this.itemsCollection.valueChanges()
      .map((encuesta: Encuesta[]) => {
        // console.log(encuesta);
        this.encuestas = [];
        for (let datos of encuesta) {
          this.encuestas.unshift(datos);
        }
        return this.encuestas;
      })
  }

  agregarEncuesta(nombre: string, apellido: string, edad: string, telefono: string, juego: string, puntuacion: string, opinion: string, terminos: string) {
    
    let encuesta: Encuesta = {
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      telefono: telefono,
      juego: juego,
      puntuacion: puntuacion,
      opinion: opinion,
      terminos: terminos,
      uid: this.AuthSvc.usuario.uid,
      umail: this.AuthSvc.usuario.email,
    }
    
    return this.itemsCollection.add(encuesta);
  }
}
