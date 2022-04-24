import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralDoubtsModuleRoutingModule } from './general-doubts-module-routing.module';
import { GeneralDoubtsDashboardComponent } from './general-doubts-dashboard/general-doubts-dashboard.component';


@NgModule({
  declarations: [
    GeneralDoubtsDashboardComponent
  ],
  imports: [
    CommonModule,
    GeneralDoubtsModuleRoutingModule
  ]
})
export class GeneralDoubtsModuleModule { }
