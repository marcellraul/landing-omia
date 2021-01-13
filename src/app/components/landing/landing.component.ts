import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  //public date: any;
  //public datehour: any;

  public hash;
  public isValid: boolean = true;

  constructor(private ruta: ActivatedRoute) {
    /* this.date = new Date();
    this.date.getFullYear();
    this.datehour = new Date();
    this.datehour.getFullYear() */;
  }

  ngOnInit(): void {
    console.log(this.ruta.snapshot.params);

    this.hash = this.ruta.snapshot.params.hash;
    
    if(this.hash && this.hash === '0cda1f2904dc14e34ec69f5b23e36a0eb0fc222785ba496c41dba4a38bd9f9a5'){
      this.isValid = true;
    }else{
      this.isValid = false;
    }
  }
}
