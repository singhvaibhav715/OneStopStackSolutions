import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-neu-card-for-dashboards',
  templateUrl: './neu-card-for-dashboards.component.html',
  styleUrls: ['./neu-card-for-dashboards.component.css']
})
export class NeuCardForDashboardsComponent implements OnInit {

  @Input("configs") configs:any
  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  navigateTo(value:string){
    this._router.navigate(["/"+value])
  }

}
