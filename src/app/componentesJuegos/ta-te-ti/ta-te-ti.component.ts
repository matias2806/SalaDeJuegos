import { Component, OnInit } from '@angular/core';
import { Clasejugadas } from '../../Models/jugadas';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ta-te-ti',
  templateUrl: './ta-te-ti.component.html',
  styleUrls: ['./ta-te-ti.component.css']
})
export class TaTeTiComponent implements OnInit {

  jugadas: Clasejugadas[] = [];
  arrayMovimientos = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3'] ;//9
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  jugada(tecla: string) {
    var ganoH=false;
    var ganoM=false;
    
    let index = this.arrayMovimientos.indexOf(tecla);
    if (index > -1) {
      console.log("Turno Humano " + tecla);
      this.arrayMovimientos.splice(index, 1);
      this.dibujarX(tecla.toString());

      var a = new Clasejugadas(tecla, "X");
      this.jugadas.push(a);

      if(this.arrayMovimientos.length < 5){
        var aux =this.controlarGanador();
        if(aux != -1){
          if(ganoM ==false){
            ganoH = true;
            Swal.fire({
              title: 'Ganaste',
              text: 'Felicitaciones le ganaste a la maquina!',
              icon: 'success',
            });
            setTimeout(() => {
              this.router.navigate(['/Listado']);
              Swal.close();
            }, 2000);
          }
        }
      }

      this.jugadaMaquina();
      console.log("Movimientos posibles =>" + this.arrayMovimientos);
      if(this.arrayMovimientos.length < 5){
        var aux =this.controlarGanador();
        if(aux != -1){
          if(ganoH == false){
            ganoM = true;
            Swal.fire({
              title: 'Perdiste',
              text: 'Te gano una maquina, No te rindas!',
              icon: 'error',
            });
            setTimeout(() => {
              this.router.navigate(['/Listado']);
              Swal.close();
            }, 2000);
          }
        }
      }

      if(this.arrayMovimientos.length == 0){
        if(ganoH == false && ganoM == false){
          Swal.fire({
            title: 'Empate',
            text: 'Casi te gana una maquina, Eso estubo cerca!',
            icon: 'warning',
          });
          setTimeout(() => {
            this.router.navigate(['/Listado']);
            Swal.close();
          }, 2000);
        }
      }
    }
    //console.log(this.jugadas);
  }

  controlarGanador() {
    var a1 = '';
    var a2 = '';
    var a3 = '';
    var b1 = '';
    var b2 = '';
    var b3 = '';
    var c1 = '';
    var c2 = '';
    var c3 = '';

    this.jugadas.forEach(x => {
      if (x.posicion == 'A1') a1 = x.letra;
      if (x.posicion == 'A2') a2 = x.letra;
      if (x.posicion == 'A3') a3 = x.letra;
      if (x.posicion == 'B1') b1 = x.letra;
      if (x.posicion == 'B2') b2 = x.letra;
      if (x.posicion == 'B3') b3 = x.letra;
      if (x.posicion == 'C1') c1 = x.letra;
      if (x.posicion == 'C2') c2 = x.letra;
      if (x.posicion == 'C3') c3 = x.letra;
    });
    //horizontales
    if(a1 =="X" && a2 =="X" && a3 =="X") return "Ganaste";
    if(b1 =="X" && b2 =="X" && b3 =="X") return "Ganaste";
    if(c1 =="X" && c2 =="X" && c3 =="X") return "Ganaste";

    if(a1 =="O" && a2 =="O" && a3 =="O") return "Perdiste";
    if(b1 =="O" && b2 =="O" && b3 =="O") return "Perdiste";
    if(c1 =="O" && c2 =="O" && c3 =="O") return "Perdiste";


    //verticales
    if(a1 =="X" && b1 =="X" && c1 =="X") return "Ganaste";
    if(a2 =="X" && b2 =="X" && c2 =="X") return "Ganaste";
    if(a3 =="X" && b3 =="X" && c3 =="X") return "Ganaste";

    if(a1 =="O" && b1 =="O" && c1 =="O") return "Perdiste";
    if(a2 =="O" && b2 =="O" && c2 =="O") return "Perdiste";
    if(a3 =="O" && b3 =="O" && c3 =="O") return "Perdiste";

    //diagonales
    if(a1 =="X" && b2 =="X" && c3 =="X") return "Ganaste";
    if(a3 =="X" && b2 =="X" && c1 =="X") return "Ganaste";

    if(a1 =="O" && b2 =="O" && c3 =="O") return "Ganaste";
    if(a3 =="O" && b2 =="O" && c1 =="O") return "Ganaste";

    return -1;
  }

  jugadaMaquina() {

    let aux = this.arrayMovimientos[Math.floor(Math.random() * this.arrayMovimientos.length)]
    let index = this.arrayMovimientos.indexOf(aux);
    if (index > -1) {
      console.log("Turno maquina " + aux);
      this.arrayMovimientos.splice(index, 1);
      this.dibujarO(aux);
      var a = new Clasejugadas(aux, "O");
      this.jugadas.push(a);
    }
  }

  dibujarX(tecla: string) {
    var aux = document.getElementById(tecla);
    if (aux != null) {
      var p = document.createElement("p");
      p.textContent = "X";
      p.style.color = "yellow";
      p.style.fontFamily = "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
      p.style.fontSize = "80px";
      p.style.textAlign = "center";
      p.className += "cruz";

      aux.appendChild(p);
    }
  }

  dibujarO(tecla: string) {
    var aux = document.getElementById(tecla);
    if (aux != null) {
      var p = document.createElement("p");
      p.textContent = "O";
      p.style.color = "white";
      p.style.fontFamily = "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
      p.style.fontSize = "80px";
      p.style.textAlign = "center";
      p.className += "circulo";

      aux.appendChild(p);
    }
  }

}
