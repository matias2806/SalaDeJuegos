import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PiedPapTijRoutingModule } from './pied-pap-tij-routing.module';
import { PiedPapTijComponent } from './pied-pap-tij.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PiedPapTijComponent],
  imports: [
    CommonModule,
    FormsModule,
    PiedPapTijRoutingModule,
  ]
})
export class PiedPapTijModule { }
