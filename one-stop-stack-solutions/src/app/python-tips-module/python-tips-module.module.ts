import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PythonTipsModuleRoutingModule } from './python-tips-module-routing.module';
import { PythonTipsDashboardComponent } from './python-tips-dashboard/python-tips-dashboard.component';


@NgModule({
  declarations: [
    PythonTipsDashboardComponent
  ],
  imports: [
    CommonModule,
    PythonTipsModuleRoutingModule
  ]
})
export class PythonTipsModuleModule { }
