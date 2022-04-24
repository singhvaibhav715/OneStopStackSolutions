import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MongoTipsModuleRoutingModule } from './mongo-tips-module-routing.module';
import { MongoTipsDashboardComponent } from './mongo-tips-dashboard/mongo-tips-dashboard.component';


@NgModule({
  declarations: [
    MongoTipsDashboardComponent
  ],
  imports: [
    CommonModule,
    MongoTipsModuleRoutingModule
  ]
})
export class MongoTipsModuleModule { }
