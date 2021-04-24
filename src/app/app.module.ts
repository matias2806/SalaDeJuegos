import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { ListadoComponent } from './componentesJuegos/listado/listado.component';
import { ChatComponent } from './chat/chat.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { ResultadosComponent } from './componentesJuegos/resultados/resultados.component';

@NgModule({
  declarations: [
    AppComponent,
    QuienSoyComponent,
    NavbarComponent,
    ListadoComponent,
    ChatComponent,
    EncuestaComponent,
    ResultadosComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
