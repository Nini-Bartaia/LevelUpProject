import { Component, OnInit } from '@angular/core';
import { windowWhen } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  secondTab=false
  firstTab=false
  thirdTab=false
  show=false;
  constructor() { }

  ngOnInit(): void {
    this.firstTab=true

    


  }

  onClick(){

    this.secondTab=true
    this.firstTab=false;
    this.thirdTab=false;
     

  }

  first(){
    this.firstTab=true
    this.secondTab=false;
    this.thirdTab=false;
  }

  third(){
    this.thirdTab=true
    this.firstTab=false;
    this.secondTab=false
    console.log(this.thirdTab)

  }

 

}
