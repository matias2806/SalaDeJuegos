import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/clases/Mensaje';
import { MensajesService } from '../services/mensajes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public mensaje : Mensaje = new Mensaje();
  constructor(private mensajeService: MensajesService) { }

  ngOnInit(): void {
  }

  EnviarMensaje(){
    console.log("metodo");
    this.mensajeService.create(this.mensaje).then(()=>{
      console.log("Mensaje enviado");
    });
    ;
  }
}
