import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiniProjectsVueModuleRoutingModule } from './mini-projects-vue-module-routing.module';
import { MiniProjectsVueDashboardComponent } from './mini-projects-vue-dashboard/mini-projects-vue-dashboard.component';


@NgModule({
  declarations: [
    MiniProjectsVueDashboardComponent
  ],
  imports: [
    CommonModule,
    MiniProjectsVueModuleRoutingModule
  ]
})
export class MiniProjectsVueModuleModule { }
