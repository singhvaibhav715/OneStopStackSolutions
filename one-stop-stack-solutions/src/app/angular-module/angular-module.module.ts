import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularModuleRoutingModule } from './angular-module-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AngularModuleRoutingModule
  ]
})
export class AngularModuleModule { }
