import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityForumModuleRoutingModule } from './community-forum-module-routing.module';
import { CommunityForumDashboardComponent } from './community-forum-dashboard/community-forum-dashboard.component';


@NgModule({
  declarations: [
    CommunityForumDashboardComponent
  ],
  imports: [
    CommonModule,
    CommunityForumModuleRoutingModule
  ]
})
export class CommunityForumModuleModule { }
