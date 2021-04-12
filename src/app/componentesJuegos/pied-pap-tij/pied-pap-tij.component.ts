import { Component, OnInit } from '@angular/core';
import { ignoreElements } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pied-pap-tij',
  templateUrl: './pied-pap-tij.component.html',
  styleUrls: ['./pied-pap-tij.component.css']
})
export class PiedPapTijComponent implements OnInit {
  jugadas = ['piedra', 'papel', 'tijera'] ;
  constructor() { }

  ngOnInit(): void {
  }

  jugada(tecla: string){
    var gm = this.jugadaMaquina();
    if(gm != "error"){
      this.validarGanador(tecla,gm);
    }
  }

  jugadaMaquina() {

    let aux = this.jugadas[Math.floor(Math.random() * this.jugadas.length)]
    let index = this.jugadas.indexOf(aux);
    if (index > -1) {
      console.log("Turno maquina " + aux);
      return aux;
    }
    return "error";
  }

  validarGanador(gh: string, gm: string){
    var aux="";
    if(gh == "tijera" && gm == "tijera"){aux="empate"};
    if(gh == "piedra" && gm == "piedra"){aux="empate"};
    if(gh == "papel" && gm == "papel"){aux="empate"};

    if(gh == "tijera" && gm == "piedra"){aux="perdiste"};
    if(gh == "piedra" && gm == "papel"){aux="perdiste"};
    if(gh == "papel" && gm == "tijera"){aux="perdiste"};

    if(gh == "tijera" && gm == "papel"){aux="ganaste"};
    if(gh == "piedra" && gm == "tijera"){aux="ganaste"};
    if(gh == "papel" && gm == "piedra"){aux="ganaste"};

    console.log(aux);
    this.muestraMensaje(aux, gm);
  }

  muestraMensaje(aux: string, gm: string){
    if(aux == "perdiste"){
      Swal.fire({
        title: '¡Perdiste!',
        text: '¡Sigue practicando!',
        imageUrl: '../../../assets/piedPapelTijera/'+gm+'.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      });
    }
    if(aux == "ganaste"){
      Swal.fire({
        title: '¡Ganaste!',
        text: 'Sos un campeón, Me ganaste.',
        imageUrl: '../../../assets/piedPapelTijera/'+gm+'.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      });
    }
    if(aux == "empate"){
      Swal.fire({
        title: '¡Empate!',
        text: '¡Quiero la revancha!',
        imageUrl: '../../../assets/piedPapelTijera/'+gm+'.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
    }
  }

}
