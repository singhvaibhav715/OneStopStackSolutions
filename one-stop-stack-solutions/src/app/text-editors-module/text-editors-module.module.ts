import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextEditorsModuleRoutingModule } from './text-editors-module-routing.module';
import { TextEditorsDashboardComponent } from './text-editors-dashboard/text-editors-dashboard.component';


@NgModule({
  declarations: [
    TextEditorsDashboardComponent
  ],
  imports: [
    CommonModule,
    TextEditorsModuleRoutingModule
  ]
})
export class TextEditorsModuleModule { }
