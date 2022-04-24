import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontEndHacksModuleRoutingModule } from './front-end-hacks-module-routing.module';
import { FrontEndHacksDashboardComponent } from './front-end-hacks-dashboard/front-end-hacks-dashboard.component';


@NgModule({
  declarations: [
    FrontEndHacksDashboardComponent
  ],
  imports: [
    CommonModule,
    FrontEndHacksModuleRoutingModule
  ]
})
export class FrontEndHacksModuleModule { }
