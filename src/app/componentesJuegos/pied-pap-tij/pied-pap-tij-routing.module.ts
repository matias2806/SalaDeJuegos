import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PiedPapTijComponent } from './pied-pap-tij.component';

const routes: Routes = [{ path: '', component: PiedPapTijComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PiedPapTijRoutingModule { }
