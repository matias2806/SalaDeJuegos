import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AhorcadoRoutingModule } from './ahorcado-routing.module';
import { AhorcadoComponent } from './ahorcado.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AhorcadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AhorcadoRoutingModule,
  ]
})
export class AhorcadoModule { }
