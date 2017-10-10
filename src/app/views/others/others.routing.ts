import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppBlankComponent } from './app-blank/app-blank.component';

const routes: Routes = [
    {
        path: '',
        component: AppBlankComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherRoutingModule { }
