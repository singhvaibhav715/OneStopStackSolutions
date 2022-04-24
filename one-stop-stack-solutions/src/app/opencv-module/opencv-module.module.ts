import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpencvModuleRoutingModule } from './opencv-module-routing.module';
import { OpencvDashboardComponent } from './opencv-dashboard/opencv-dashboard.component';


@NgModule({
  declarations: [
    OpencvDashboardComponent
  ],
  imports: [
    CommonModule,
    OpencvModuleRoutingModule
  ]
})
export class OpencvModuleModule { }
