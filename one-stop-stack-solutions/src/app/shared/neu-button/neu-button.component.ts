import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-neu-button',
  templateUrl: './neu-button.component.html',
  styleUrls: ['./neu-button.component.css']
})
export class NeuButtonComponent implements OnInit {

  @Input("configs") configs:any;
  constructor() { }
  

  ngOnInit(): void {
    console.log("CONFiGS: ",this.configs)
  }

}
