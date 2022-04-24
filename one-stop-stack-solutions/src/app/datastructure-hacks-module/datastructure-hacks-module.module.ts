import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatastructureHacksModuleRoutingModule } from './datastructure-hacks-module-routing.module';
import { DatastructureHacksDashboardComponent } from './datastructure-hacks-dashboard/datastructure-hacks-dashboard.component';


@NgModule({
  declarations: [
    DatastructureHacksDashboardComponent
  ],
  imports: [
    CommonModule,
    DatastructureHacksModuleRoutingModule
  ]
})
export class DatastructureHacksModuleModule { }
