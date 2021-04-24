import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Resultado } from '../interface/resultado.interface';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

  private itemsCollection: AngularFirestoreCollection<Resultado>;
  public resultados: Resultado[] = [];

  constructor(private afs: AngularFirestore, public AuthSvc: AuthService) { }

  cargarResultados() {
    this.itemsCollection = this.afs.collection<Resultado>('resultados', ref => ref.orderBy('fecha', 'desc').limit(50));

    return this.itemsCollection.valueChanges()
      .map((resultado: Resultado[]) => {
        // console.log(resultado);
        this.resultados = [];
        for (let result of resultado) {
          this.resultados.unshift(result);
        }
        return this.resultados;
      })
  }

  agregarResultado(estado: string, juego: string) {
    let result: Resultado = {
      fecha: new Date().getTime(),
      estado: estado,
      juego: juego,
      uid: this.AuthSvc.usuario.uid,
      uemail: this.AuthSvc.usuario.email,
    }
    return this.itemsCollection.add(result);
  }
}
