import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavascriptTipsModuleRoutingModule } from './javascript-tips-module-routing.module';
import { JavascriptTipsDashboardComponent } from './javascript-tips-dashboard/javascript-tips-dashboard.component';


@NgModule({
  declarations: [
    JavascriptTipsDashboardComponent
  ],
  imports: [
    CommonModule,
    JavascriptTipsModuleRoutingModule
  ]
})
export class JavascriptTipsModuleModule { }
