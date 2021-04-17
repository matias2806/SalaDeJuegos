import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaTeTiComponent } from './ta-te-ti.component';

const routes: Routes = [{ path: '', component: TaTeTiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaTeTiRoutingModule { }
