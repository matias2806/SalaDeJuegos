import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemotestRoutingModule } from './memotest-routing.module';
import { MemotestComponent } from './memotest.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MemotestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MemotestRoutingModule,
    HttpClientModule
  ]
})
export class MemotestModule { }
