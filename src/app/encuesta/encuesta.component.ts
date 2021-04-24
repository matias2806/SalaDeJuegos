import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EncuestaService } from '../services/encuesta/encuesta.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.scss']
})
export class EncuestaComponent implements OnInit {

  public forma: FormGroup;
  public encuestas: Observable<any[]>;
  elemento:any;

  constructor(private fb: FormBuilder, public _es: EncuestaService, private router: Router) {
    this._es.cargarEncuestas().subscribe(() => {      
    });
  }

  ngOnInit(): void {
    this.forma = this.fb.group({
      'nombre': ['', [Validators.required]],
      'apellido': ['', Validators.required],
      'edad': ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      'telefono': ['', [Validators.required]],
      'juego': ['', [Validators.required]],
      'puntuacion': ['', [Validators.required]],
      'opinion': ['', [Validators.required]],
      'terminos': ['', Validators.required],
    });
  }



  public aceptar(): void {
    // console.log(this.forma);
    // console.log(this.forma.getRawValue()); //te devuelve un JSON
    // console.log(this.forma.get('nombre').value); //te da un campo puntual
    // console.log(this.forma.controls['nombre'].value); //te da un campo puntual otra forma

    var nombre = this.forma.controls['nombre'].value;
    var apellido = this.forma.controls['apellido'].value;
    var edad = this.forma.controls['edad'].value;
    var telefono = this.forma.controls['telefono'].value;
    var juego = this.obtenerValor(this.forma.controls['juego'].value);
    var puntuacion = this.forma.controls['puntuacion'].value;
    var opinion = this.forma.controls['opinion'].value;
    var terminos = this.forma.controls['terminos'].value;

    
    this._es.agregarEncuesta(nombre, apellido, edad, telefono, juego, puntuacion, opinion, terminos).finally(()=>{
      this.muestraMensaje("correcta");
    }).catch((err)=>{
      this.muestraMensaje("error");
      console.log(err);
    });
  }

  obtenerValor(juego: string): string {
    switch (juego) {
      case 'M':
        juego = "Memotest";
        break;
      case 'A':
        juego = "Ahorcado";
        break;
      case 'T':
        juego = "TaTeTi";
        break;
      case 'P':
        juego = "Piedra, papel o tijera";
        break;
    }
    return juego;
  }


  muestraMensaje(aux: string){
    if(aux == "correcta"){
      Swal.fire({
        icon: 'success',
        title: '¡Muchas gracias!',
        text: 'Su encuesta se cargo con exito! ',
      }).finally(()=>{
        this.router.navigate(['/home']);
      });
    }
    if(aux == "error"){
      Swal.fire({
        icon: 'error',
        title: '¡Lo sentimos mucho!',
        text: 'Ocurrio un error en la carga de la encuesta',
      }).finally(()=>{
        this.router.navigate(['/home']);
      });
    }
  }

}
