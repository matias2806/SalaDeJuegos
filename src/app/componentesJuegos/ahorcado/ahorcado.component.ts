import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.scss']
})
export class AhorcadoComponent implements OnInit {
  arrayPalbras: string[] = ['murcielagos', 'submarino', 'tios', 'comida', 'cueva', 'ingles', 'versiculo', 'tsunami', 'selva', 'sequia', 'cuerno', 'pulsera', 'ahorcado', 'delfin', 'himnos', 'frutas', 'lineas' ];
  intentosFijos = 5; 
  intentos = 0; 
  palabra: string = '';
  palabraConGuiones: string = ''
  nombreFoto: string = 'ahorcado_1.png';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.palabra = this.elejirPalabra();
    this.palabraConGuionesTranformacion(this.palabra);
  }

  elejirPalabra() {
    let aux = this.arrayPalbras[Math.floor(Math.random() * this.arrayPalbras.length)]
    return aux;
  }

  palabraConGuionesTranformacion(palabra: string) {
    this.palabraConGuiones = palabra.replace(/./g, "_ ");
  }

  calcular(tecla:string) {
    var aux: string[] = [];
    var aux2: string = "";
    var flag = false;

    for (const iterator of this.palabraConGuiones) {
      aux.push(iterator);
    }

    if (tecla != '') {
      for (let i = 0; i < this.palabra.length; i++) {
        if (tecla == this.palabra[i]) {
          flag = true;
          aux[i * 2] = tecla;


          aux.forEach(element => {
            aux2 += element;
          });
          if (this.palabra.length) {
            this.palabraConGuiones = aux2;
          }

          // console.log("aux2 =>", aux2);
          // console.log("palabra =>", i);
          // console.log("palabraConGuiones largo =>", this.palabraConGuiones.length, this.palabraConGuiones);
          // console.log("aux =>", aux);
          // console.log("i*2 =>", i * 2);
        }
      }
      if (flag == false) {
        //No esta
        this.intentos++;
        this.cambiaFoto();
      }
      this.validarGanador()
    }
    tecla = '';
  }

  cambiaFoto() {
    switch (this.intentos) {
      case 1:
        this.nombreFoto = 'ahorcado_2.png';
        break;
      case 2:
        this.nombreFoto = 'ahorcado_3.png';
        break;
      case 3:
        this.nombreFoto = 'ahorcado_4.png';
        break;
      case 4:
        this.nombreFoto = 'ahorcado_5.png';
        break;
      case 5:
        this.nombreFoto = 'ahorcado_6.png';
        this.muestraMensaje("perdiste");
        break;
    }
  }


  validarGanador(){
    var gano=true;

    for (const i of this.palabraConGuiones) {
      if(i == "_"){
        gano=false;
      }
    }
    if(gano){ 
      this.muestraMensaje("ganaste");
    }
  }

  muestraMensaje(aux: string){
    if(aux == "perdiste"){
      Swal.fire({
        title: '¡Perdiste!',
        text: '¡Sigue practicando! La palabra correcta era '+ this.palabra,
        position: 'top',
      }).finally(()=>{
        this.palabra = this.elejirPalabra();
        this.palabraConGuionesTranformacion(this.palabra);
        this.nombreFoto = 'ahorcado_1.png';
        this.intentos = 0;
      });
    }
    if(aux == "ganaste"){
      Swal.fire({
        title: '¡Ganaste!',
        text: 'Sos un campeón, Adivinaste la palabra.',
        position: 'top',
      }).finally(()=>{
        this.palabra = this.elejirPalabra();
        this.palabraConGuionesTranformacion(this.palabra);
        this.nombreFoto = 'ahorcado_1.png';
        this.intentos = 0;
      });
    }
    // setTimeout(() => {
    //   this.router.navigate(['/Listado']);
    //   Swal.close();
    // }, 2000);
  }


  tecla(tecla:string){
    console.log(tecla);
    return tecla;
  }


}
