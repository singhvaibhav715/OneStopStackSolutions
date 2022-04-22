import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-neu-card-for-dashboards',
  templateUrl: './neu-card-for-dashboards.component.html',
  styleUrls: ['./neu-card-for-dashboards.component.css']
})
export class NeuCardForDashboardsComponent implements OnInit {

  @Input("configs") configs:any
  constructor() { }

  ngOnInit(): void {
  }

}
