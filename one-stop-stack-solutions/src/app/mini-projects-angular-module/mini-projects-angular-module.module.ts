import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiniProjectsAngularModuleRoutingModule } from './mini-projects-angular-module-routing.module';
import { MiniProjectsAngularDashboardComponent } from './mini-projects-angular-dashboard/mini-projects-angular-dashboard.component';


@NgModule({
  declarations: [
    MiniProjectsAngularDashboardComponent
  ],
  imports: [
    CommonModule,
    MiniProjectsAngularModuleRoutingModule
  ]
})
export class MiniProjectsAngularModuleModule { }
