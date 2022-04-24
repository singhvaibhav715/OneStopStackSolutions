import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactModuleRoutingModule } from './react-module-routing.module';
import { ReactDashboardComponent } from './react-dashboard/react-dashboard.component';


@NgModule({
  declarations: [
    ReactDashboardComponent
  ],
  imports: [
    CommonModule,
    ReactModuleRoutingModule
  ]
})
export class ReactModuleModule { }
