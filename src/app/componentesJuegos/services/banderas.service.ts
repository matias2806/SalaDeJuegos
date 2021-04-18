import { first, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MemotestModule } from '../memotest/memotest.module';
import { environment } from 'src/environments/environment';
import { Card } from '../Models/card'
import { resolve } from '@angular/compiler-cli/src/ngtsc/file_system';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})

export class BanderasService {

  constructor(private http: HttpClient) { }

  async todos() {

    return this.http.get(`${environment.baseUrlApi}`).toPromise()
  }

  async conseguirId(id:string){
    return this.http.get(`${environment.baseUrlApi}${id}`).toPromise()
  }
}
