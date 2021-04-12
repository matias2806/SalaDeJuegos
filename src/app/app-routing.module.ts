import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './componentesJuegos/listado/listado.component';
import { PiedPapTijComponent } from './componentesJuegos/pied-pap-tij/pied-pap-tij.component';
import { TaTeTiComponent } from './componentesJuegos/ta-te-ti/ta-te-ti.component';
import { ChatComponent} from './chat/chat.component';

import { QuienSoyComponent } from './quien-soy/quien-soy.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'quienSoy', component: QuienSoyComponent },

  { path: 'Listado', component: ListadoComponent },

  { path: 'ppt', component: PiedPapTijComponent },

  { path: 'tateti', component: TaTeTiComponent },

  { path: 'chat', component: ChatComponent },

  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },

  { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
