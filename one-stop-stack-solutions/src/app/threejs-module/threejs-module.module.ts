import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThreejsModuleRoutingModule } from './threejs-module-routing.module';
import { ThreejsDashboardComponent } from './threejs-dashboard/threejs-dashboard.component';


@NgModule({
  declarations: [
    ThreejsDashboardComponent
  ],
  imports: [
    CommonModule,
    ThreejsModuleRoutingModule
  ]
})
export class ThreejsModuleModule { }
