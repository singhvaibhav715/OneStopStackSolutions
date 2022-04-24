import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevopsModuleRoutingModule } from './devops-module-routing.module';
import { DevopsDashboardComponent } from './devops-dashboard/devops-dashboard.component';


@NgModule({
  declarations: [
    DevopsDashboardComponent
  ],
  imports: [
    CommonModule,
    DevopsModuleRoutingModule
  ]
})
export class DevopsModuleModule { }
