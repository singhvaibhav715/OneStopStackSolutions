import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiniProjectsReactModuleRoutingModule } from './mini-projects-react-module-routing.module';
import { MiniProjectsReactDashboardComponent } from './mini-projects-react-dashboard/mini-projects-react-dashboard.component';


@NgModule({
  declarations: [
    MiniProjectsReactDashboardComponent
  ],
  imports: [
    CommonModule,
    MiniProjectsReactModuleRoutingModule
  ]
})
export class MiniProjectsReactModuleModule { }
