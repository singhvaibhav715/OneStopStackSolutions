import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LatestNotificationsModuleRoutingModule } from './latest-notifications-module-routing.module';
import { LatestNotificationsDashboardComponent } from './latest-notifications-dashboard/latest-notifications-dashboard.component';


@NgModule({
  declarations: [
    LatestNotificationsDashboardComponent
  ],
  imports: [
    CommonModule,
    LatestNotificationsModuleRoutingModule
  ]
})
export class LatestNotificationsModuleModule { }
