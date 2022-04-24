import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HowToModuleRoutingModule } from './how-to-module-routing.module';
import { HowToDashboardComponent } from './how-to-dashboard/how-to-dashboard.component';


@NgModule({
  declarations: [
    HowToDashboardComponent
  ],
  imports: [
    CommonModule,
    HowToModuleRoutingModule
  ]
})
export class HowToModuleModule { }
