import { extractSemanticTypeParameters } from '@angular/compiler-cli/src/ngtsc/incremental/semantic_graph';
import { Component, OnInit } from '@angular/core';
import { BanderasService } from '../services/banderas.service';
import { Card } from '../Models/card';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ResultadosService } from '../services/resultados.service';

@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css'],
  providers: [BanderasService],
})
export class MemotestComponent implements OnInit {

  idUnico = 10;
  match: number = 0;
  arrayCards: Card[] = []; //Va a ser de 4
  arrayFotos = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'];//20


  intentos = 14;
  idU1 = "";
  idU2 = "";
  idMatch1 = "";
  idMatch2 = "";
  bandera = "false";

  constructor(private Bservice: BanderasService, private router: Router, public _rs: ResultadosService) { }

  async ngOnInit() {

    await this.Bservice.todos().then((res: any) => {
      var array = this.consigueCuatroRandom();
      array.forEach(item => {
        var card = new Card(res.results[item].image, res.results[item].id, Math.floor(Math.random() * 100), this.idUnico++, this.match);
        this.arrayCards.push(card);
        var card2: Card = JSON.parse(JSON.stringify(card))
        card2.orden = Math.floor(Math.random() * 100)
        card2.idUnico = this.idUnico++;
        this.arrayCards.push(card2);

        this.match++;
      });
      this.arrayCards.sort((a: any, b: any) => { if (a.orden > b.orden) { return 1 } return -1 })
    });

    console.log("pos", this.arrayCards, this.arrayCards.length);
  }

  consigueCuatroRandom() {
    var array: string[] = [];
    for (let index = 0; index < 8; index++) {

      let aux = this.arrayFotos[Math.floor(Math.random() * this.arrayFotos.length)];
      array.push(aux);

      let index = this.arrayFotos.indexOf(aux);
      if (index > -1) {
        this.arrayFotos.splice(index, 1);
      }
    }
    return array;
  }

  bloquearCartas() {
    var img1 = document.getElementById(this.idU1);
    img1?.classList.add('class', "bloqueada");
    var img2 = document.getElementById(this.idU2);
    img2?.classList.add('class', "bloqueada");
  }

  desocultarCarta(idUni: string) {
    var img = document.getElementById(idUni);
    img?.classList.remove("bloque");
  }

  ocultarCartas() {
    var img1 = document.getElementById(this.idU1);
    img1?.classList.add('class', "bloque");
    var img2 = document.getElementById(this.idU2);
    img2?.classList.add('class', "bloque");
  }


  control(imagen: any) {
    var img = document.getElementById(imagen.idUnico);
    var auxClases = img?.className;
    // console.log(auxClases?.includes("bloqueada"));

    if (!auxClases?.includes("bloqueada")) {

      //if de carta 2
      if (this.idU2 == "" && this.idU1 != "") {
        // console.log("entro c2");
        this.desocultarCarta(imagen.idUnico.toString());
        this.idU2 = imagen.idUnico;
        this.idMatch2 = imagen.match;
        this.bandera = "true";
      }

      //if de carta 1
      if (this.idU1 == "" && this.idU2 == "") {
        // console.log("entro c1");
        this.desocultarCarta(imagen.idUnico.toString());
        this.idU1 = imagen.idUnico;
        this.idMatch1 = imagen.match;
      }

      //revision
      if (this.bandera == "true") {
        // console.log("revisa");
        this.bandera = "false";
        this.controlGanador();
      }
    }
  }

  controlGanador() {
    console.log("antes del set");
    setTimeout(() => {
      if (this.idMatch1 == this.idMatch2) {
        console.log("match");
        this.bloquearCartas();
        this.reset();
      } else {
        this.ocultarCartas();
        this.reset();
        console.log("u1", this.idU1, "u2", this.idU2);
      }
      this.controlIntentos();
      this.intentos--;
    }, 1200);
  }

  controlIntentos() {
    if (this.intentos == 1) {
      this.muestraMensaje("perdiste");
    }
    else {
      var auxImg;
      var flagGano = "true";
      this.arrayCards.forEach(e => {
        var img = document.getElementById(e.idUnico.toString());
        auxImg = img?.className;
        if (!auxImg?.includes("bloqueada")) {
          flagGano = "false";
        }
      });
      if (flagGano == "true") {
        this.muestraMensaje("ganaste");
      }
    }

  }

  muestraMensaje(aux: string) {
    if (aux == "perdiste") {
      this._rs.agregarResultado("Perdedor", "Memotest");
      Swal.fire({
        title: '¡Perdiste!',
        text: '¡No te rindas!',
      }).finally(() => {
        this.router.navigate(['/Listado']);
      });
    }
    if (aux == "ganaste") {
      this._rs.agregarResultado("Ganador", "Memotest");
      Swal.fire({
        title: '¡Ganaste!',
        text: 'Sabia que lo lograrias, Le ganaste a la maquina.',
      }).finally(() => {
        this.router.navigate(['/Listado']);
      });
    }
  }

  reset() {
    this.idU1 = "";
    this.idU2 = "";
    this.idMatch1 = "";
    this.idMatch2 = "";
  }

}
