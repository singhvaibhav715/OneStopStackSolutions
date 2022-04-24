import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SqlTipsModuleRoutingModule } from './sql-tips-module-routing.module';
import { SqlTipsDashboardComponent } from './sql-tips-dashboard/sql-tips-dashboard.component';


@NgModule({
  declarations: [
    SqlTipsDashboardComponent
  ],
  imports: [
    CommonModule,
    SqlTipsModuleRoutingModule
  ]
})
export class SqlTipsModuleModule { }
