import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { NeuButtonComponent } from './neu-button/neu-button.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { NeuCardForDashboardsComponent } from './neu-card-for-dashboards/neu-card-for-dashboards.component';



@NgModule({
  declarations: [
    NavigationComponent,
    NeuButtonComponent,
    NeuCardForDashboardsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavigationComponent,
    NeuButtonComponent,
    NeuCardForDashboardsComponent
  ]
})
export class SharedModule { }
