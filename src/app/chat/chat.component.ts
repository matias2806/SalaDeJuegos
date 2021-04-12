import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ChatService } from './services/chat.service';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit{
  
  public chats: Observable<any[]>;
  mensaje:string ="";
  elemento:any;
  uid:string= "";

  constructor(public _cs: ChatService, public AuthSvc:AuthService) { 
    this._cs.cargarMensajes().subscribe(()=>{
      console.log(this.elemento);
      if( this.elemento){
        setTimeout(() => {
           this.elemento.scrollTop = this.elemento.scrollHeight;
        }, 6000);
      }
    });

  }

  ngOnInit(){
    this.elemento = document.getElementById('app-mensajes');
    console.log("sad"+this.elemento);
  }

  enviarMensaje(){
    console.log(this.mensaje);
    if(this.mensaje.length ===0){
      return;
    }
    this._cs.agregarMensaje(this.mensaje)
    .then(()=>this.mensaje="")
    .catch((err)=>console.error('Error al enviar', err));
  }
}
