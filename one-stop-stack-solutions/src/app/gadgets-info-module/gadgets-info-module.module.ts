import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GadgetsInfoModuleRoutingModule } from './gadgets-info-module-routing.module';
import { GadgetsInfoDashboardComponent } from './gadgets-info-dashboard/gadgets-info-dashboard.component';


@NgModule({
  declarations: [
    GadgetsInfoDashboardComponent
  ],
  imports: [
    CommonModule,
    GadgetsInfoModuleRoutingModule
  ]
})
export class GadgetsInfoModuleModule { }
