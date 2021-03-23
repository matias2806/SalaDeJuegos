import { first } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
//import { AngularFireModule } from '@angular/fire';
//import firebase from 'firebase/app';


@Injectable()
export class AuthService {
  //public user: firebase.User ; // chusmear

  constructor(public afAuth: AngularFireAuth) {
    
   }

  async login(email:string, password:string){
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      return result;
    } catch (error) {
      console.log(error);
    }
    return null;
  }
  
  async register(email:string, password:string){
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
    return result;
    } catch (error) {
      console.log(error);
    }
    return null;
  }

  async logout(){
    try {
      await this.afAuth.signOut();
    //redirect o algo asi
    } catch (error) {
      console.log(error);
    }
  }

  getCurrentUser(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}


