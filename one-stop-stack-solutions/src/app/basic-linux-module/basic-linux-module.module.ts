import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicLinuxModuleRoutingModule } from './basic-linux-module-routing.module';
import { LinuxDashboardComponent } from './linux-dashboard/linux-dashboard.component';


@NgModule({
  declarations: [
    LinuxDashboardComponent
  ],
  imports: [
    CommonModule,
    BasicLinuxModuleRoutingModule
  ]
})
export class BasicLinuxModuleModule { }
