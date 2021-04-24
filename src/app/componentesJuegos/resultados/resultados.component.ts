import { Component, OnInit } from '@angular/core';
import { ResultadosService } from '../services/resultados.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  public resultados: Observable<any[]>;
  elemento:any;

  constructor(public _rs: ResultadosService) { 
    this._rs.cargarResultados().subscribe(()=>{
      console.log(this.elemento);
      if( this.elemento){
        setTimeout(() => {
           this.elemento.scrollTop = this.elemento.scrollHeight;
        }, 6000);
      }
    });

  }

  ngOnInit(): void {
  }

}
