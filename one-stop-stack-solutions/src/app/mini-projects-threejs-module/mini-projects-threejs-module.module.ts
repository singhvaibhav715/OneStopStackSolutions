import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiniProjectsThreejsModuleRoutingModule } from './mini-projects-threejs-module-routing.module';
import { MiniProjectsThreejsDashboardComponent } from './mini-projects-threejs-dashboard/mini-projects-threejs-dashboard.component';


@NgModule({
  declarations: [
    MiniProjectsThreejsDashboardComponent
  ],
  imports: [
    CommonModule,
    MiniProjectsThreejsModuleRoutingModule
  ]
})
export class MiniProjectsThreejsModuleModule { }
