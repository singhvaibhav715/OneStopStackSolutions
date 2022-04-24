import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PandasModuleRoutingModule } from './pandas-module-routing.module';
import { PandasDashboardComponent } from './pandas-dashboard/pandas-dashboard.component';


@NgModule({
  declarations: [
    PandasDashboardComponent
  ],
  imports: [
    CommonModule,
    PandasModuleRoutingModule
  ]
})
export class PandasModuleModule { }
