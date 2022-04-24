import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MachineLearningModuleRoutingModule } from './machine-learning-module-routing.module';
import { MachineLearningDashboardComponent } from './machine-learning-dashboard/machine-learning-dashboard.component';


@NgModule({
  declarations: [
    MachineLearningDashboardComponent
  ],
  imports: [
    CommonModule,
    MachineLearningModuleRoutingModule
  ]
})
export class MachineLearningModuleModule { }
