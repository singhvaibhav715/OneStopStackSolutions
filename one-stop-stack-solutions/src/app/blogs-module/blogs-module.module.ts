import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsModuleRoutingModule } from './blogs-module-routing.module';
import { BlogsDashboardComponent } from './blogs-dashboard/blogs-dashboard.component';


@NgModule({
  declarations: [
    BlogsDashboardComponent
  ],
  imports: [
    CommonModule,
    BlogsModuleRoutingModule
  ]
})
export class BlogsModuleModule { }
