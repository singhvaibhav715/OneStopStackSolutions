import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { route_paths } from './routing-data';

const routes: Routes = route_paths

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
