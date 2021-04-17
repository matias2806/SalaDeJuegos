import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaTeTiRoutingModule } from './ta-te-ti-routing.module';
import { TaTeTiComponent } from './ta-te-ti.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaTeTiComponent],
  imports: [
    CommonModule,
    FormsModule,
    TaTeTiRoutingModule
  ]
})
export class TaTeTiModule { }
