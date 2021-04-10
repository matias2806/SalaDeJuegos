import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms'
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { TaTeTiComponent } from './componentesJuegos/ta-te-ti/ta-te-ti.component';
import { PiedPapTijComponent } from './componentesJuegos/pied-pap-tij/pied-pap-tij.component';
import { ListadoComponent } from './componentesJuegos/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    QuienSoyComponent,
    NavbarComponent,
    TaTeTiComponent,
    PiedPapTijComponent,
    ListadoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
