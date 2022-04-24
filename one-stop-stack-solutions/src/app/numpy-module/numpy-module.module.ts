import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumpyModuleRoutingModule } from './numpy-module-routing.module';
import { NumpyDashboardComponent } from './numpy-dashboard/numpy-dashboard.component';


@NgModule({
  declarations: [
    NumpyDashboardComponent
  ],
  imports: [
    CommonModule,
    NumpyModuleRoutingModule
  ]
})
export class NumpyModuleModule { }
