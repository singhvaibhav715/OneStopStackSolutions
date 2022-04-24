import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GitHacksModuleRoutingModule } from './git-hacks-module-routing.module';
import { GitHacksDashboardComponent } from './git-hacks-dashboard/git-hacks-dashboard.component';


@NgModule({
  declarations: [
    GitHacksDashboardComponent
  ],
  imports: [
    CommonModule,
    GitHacksModuleRoutingModule
  ]
})
export class GitHacksModuleModule { }
