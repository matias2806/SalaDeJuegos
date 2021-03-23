import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { QuienSoyComponent } from './quien-soy/quien-soy.component';

const routes: Routes = [

  { path: '', redirectTo:'/home' , pathMatch:'full'},
  
  { path: 'quienSoyComponent-component', component: QuienSoyComponent },

 
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

 
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },

 
  { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
