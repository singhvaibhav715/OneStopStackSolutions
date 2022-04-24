import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CloudServicesModuleRoutingModule } from './cloud-services-module-routing.module';
import { CloudServicesDashboardComponent } from './cloud-services-dashboard/cloud-services-dashboard.component';


@NgModule({
  declarations: [
    CloudServicesDashboardComponent
  ],
  imports: [
    CommonModule,
    CloudServicesModuleRoutingModule
  ]
})
export class CloudServicesModuleModule { }
