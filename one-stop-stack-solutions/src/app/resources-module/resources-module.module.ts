import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesModuleRoutingModule } from './resources-module-routing.module';
import { ResourcesDashboardComponent } from './resources-dashboard/resources-dashboard.component';


@NgModule({
  declarations: [
    ResourcesDashboardComponent
  ],
  imports: [
    CommonModule,
    ResourcesModuleRoutingModule
  ]
})
export class ResourcesModuleModule { }
