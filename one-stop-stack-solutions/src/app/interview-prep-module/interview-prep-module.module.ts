import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewPrepModuleRoutingModule } from './interview-prep-module-routing.module';
import { InterviewPrepDashboardComponent } from './interview-prep-dashboard/interview-prep-dashboard.component';


@NgModule({
  declarations: [
    InterviewPrepDashboardComponent
  ],
  imports: [
    CommonModule,
    InterviewPrepModuleRoutingModule
  ]
})
export class InterviewPrepModuleModule { }
