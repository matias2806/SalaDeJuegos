import { first, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MemotestModule } from '../memotest/memotest.module';
import { environment } from 'src/environments/environment';
import { Card } from '../Models/card'
import { resolve } from '@angular/compiler-cli/src/ngtsc/file_system';


@Injectable({
  providedIn: 'root'
})

export class BanderasService {

  private api = 'https://rickandmortyapi.com/api/character/';
  arrayFotos = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'];//20

  constructor(
    private http: HttpClient
  ) { }

  searchCharacters(query = '', page = 1) {
    return this.http.get<Card[]>(`${environment.baseUrlApi}/?name=${query}&page=${page}`);
  }

  todos() {
    var array: string[] = [];
    var arrayCards: Card[] = [];
    
    this.http.get(`${environment.baseUrlApi}`).subscribe((res: any) => {
      array = this.consigueCuatroRandom();

      array.forEach(item => {
        // console.log(res.results[item].image);
        let orden:number = Math.floor(Math.random() * 99999);
        var card = new Card(res.results[item].name, res.results[item].image, res.results[item].id, orden);
        arrayCards.push(card);
        // arrayCards.push(card);
      });
    });;    

    return new Promise ((resolve, rejects)=>{
      resolve(arrayCards);
    });
  }

  consigueCuatroRandom() {
    var array: string[] = [];
    for (let index = 0; index < 4; index++) {

      let aux = this.arrayFotos[Math.floor(Math.random() * this.arrayFotos.length)];
      array.push(aux);

      let index = this.arrayFotos.indexOf(aux);
      if (index > -1) {
        this.arrayFotos.splice(index, 1);
      }
      
    }
    console.log("array elejido=> " + array);
    return array;
  }
}
