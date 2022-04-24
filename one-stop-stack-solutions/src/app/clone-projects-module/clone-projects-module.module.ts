import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CloneProjectsModuleRoutingModule } from './clone-projects-module-routing.module';
import { CloneProjectsDashboardComponent } from './clone-projects-dashboard/clone-projects-dashboard.component';


@NgModule({
  declarations: [
    CloneProjectsDashboardComponent
  ],
  imports: [
    CommonModule,
    CloneProjectsModuleRoutingModule
  ]
})
export class CloneProjectsModuleModule { }
