import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  secondTab=false
  firstTab=false
  constructor() { }

  ngOnInit(): void {
    this.firstTab=true


  }

  onClick(){

    this.secondTab=true
    this.firstTab=false;
    // console.log(this.secondTab)

  }

  first(){
    this.firstTab=true
    this.secondTab=false;
  }

}
