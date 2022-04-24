import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpressModuleRoutingModule } from './express-module-routing.module';
import { ExpressDashboardComponent } from './express-dashboard/express-dashboard.component';


@NgModule({
  declarations: [
    ExpressDashboardComponent
  ],
  imports: [
    CommonModule,
    ExpressModuleRoutingModule
  ]
})
export class ExpressModuleModule { }
