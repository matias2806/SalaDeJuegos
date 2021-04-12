import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

//providers
import { AuthService } from './auth/services/auth.service';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { TaTeTiComponent } from './componentesJuegos/ta-te-ti/ta-te-ti.component';
import { PiedPapTijComponent } from './componentesJuegos/pied-pap-tij/pied-pap-tij.component';
import { ListadoComponent } from './componentesJuegos/listado/listado.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    QuienSoyComponent,
    NavbarComponent,
    TaTeTiComponent,
    PiedPapTijComponent,
    ListadoComponent,
    ChatComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    // AngularFirestore,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
