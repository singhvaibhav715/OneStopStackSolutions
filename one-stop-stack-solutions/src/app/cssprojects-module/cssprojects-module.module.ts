import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssprojectsModuleRoutingModule } from './cssprojects-module-routing.module';
import { CssprojectsDashboardComponent } from './cssprojects-dashboard/cssprojects-dashboard.component';


@NgModule({
  declarations: [
    CssprojectsDashboardComponent
  ],
  imports: [
    CommonModule,
    CssprojectsModuleRoutingModule
  ]
})
export class CssprojectsModuleModule { }
