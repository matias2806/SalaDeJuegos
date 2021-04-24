import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListadoComponent } from './componentesJuegos/listado/listado.component';
//import { PiedPapTijComponent } from './componentesJuegos/pied-pap-tij/pied-pap-tij.component';
//import { TaTeTiComponent } from './componentesJuegos/ta-te-ti/ta-te-ti.component';
import { ChatComponent } from './chat/chat.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { EncuestaComponent } from './encuesta/encuesta.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'quienSoy', component: QuienSoyComponent },
  { path: 'Listado', component: ListadoComponent },
  //{ path: 'ppt', component: PiedPapTijComponent },
  //{ path: 'tateti', component: TaTeTiComponent }, (viejo)
  { path: 'chat', component: ChatComponent },
  { path: 'encuesta', component: EncuestaComponent },

  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
  //juegos
  { path: 'tateti', loadChildren: ()=> import('./componentesJuegos/ta-te-ti/ta-te-ti.module').then(m => m.TaTeTiModule) },
  { path: 'ppt', loadChildren: ()=> import('./componentesJuegos/pied-pap-tij/pied-pap-tij.module').then(m => m.PiedPapTijModule) },
  { path: 'memotest', loadChildren: ()=> import('./componentesJuegos/memotest/memotest.module').then(m => m.MemotestModule) },
  { path: 'ahorcado', loadChildren: ()=> import('./componentesJuegos/ahorcado/ahorcado.module').then(m => m.AhorcadoModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
