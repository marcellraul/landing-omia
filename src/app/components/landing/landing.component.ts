import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  public date: any;
  public datehour: any;
  constructor() {
    this.date = new Date();
    this.date.getFullYear();
    this.datehour = new Date();
    this.datehour.getFullYear();
  }

  ngOnInit(): void {}
}
