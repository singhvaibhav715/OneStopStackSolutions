import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlaskTipsModuleRoutingModule } from './flask-tips-module-routing.module';
import { FlaskTipsDashboardComponent } from './flask-tips-dashboard/flask-tips-dashboard.component';


@NgModule({
  declarations: [
    FlaskTipsDashboardComponent
  ],
  imports: [
    CommonModule,
    FlaskTipsModuleRoutingModule
  ]
})
export class FlaskTipsModuleModule { }
