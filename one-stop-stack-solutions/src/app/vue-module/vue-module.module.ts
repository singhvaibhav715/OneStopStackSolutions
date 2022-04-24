import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VueModuleRoutingModule } from './vue-module-routing.module';
import { VueDashboardComponent } from './vue-dashboard/vue-dashboard.component';


@NgModule({
  declarations: [
    VueDashboardComponent
  ],
  imports: [
    CommonModule,
    VueModuleRoutingModule
  ]
})
export class VueModuleModule { }
