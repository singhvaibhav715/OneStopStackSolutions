import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DjandoModuleRoutingModule } from './djando-module-routing.module';
import { DjandoDashboardComponent } from './djando-dashboard/djando-dashboard.component';


@NgModule({
  declarations: [
    DjandoDashboardComponent
  ],
  imports: [
    CommonModule,
    DjandoModuleRoutingModule
  ]
})
export class DjandoModuleModule { }
