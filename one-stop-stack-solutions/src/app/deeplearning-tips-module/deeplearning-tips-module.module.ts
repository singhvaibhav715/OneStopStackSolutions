import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeeplearningTipsModuleRoutingModule } from './deeplearning-tips-module-routing.module';
import { DeeplearningTipsDashboardComponent } from './deeplearning-tips-dashboard/deeplearning-tips-dashboard.component';


@NgModule({
  declarations: [
    DeeplearningTipsDashboardComponent
  ],
  imports: [
    CommonModule,
    DeeplearningTipsModuleRoutingModule
  ]
})
export class DeeplearningTipsModuleModule { }
