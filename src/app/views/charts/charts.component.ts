import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{Subscription,map}from 'rxjs'
@Component({
  selector: 'charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})

export class ChartsComponent {
  constructor(private route:ActivatedRoute){}
  subscription!:Subscription
  isShown=false
  type:string= 'market-price'
  ngOnInit(){
    this.subscription = this.route.params
    .pipe(
      map(params => console.log('params',params)
      )).subscribe()
    this.isShown=false
    
    
  }
  switchChart(type:string) :void{
    this.type=type
    this.isShown= !this.isShown
  }
  closeModal(){
    this.isShown= !this.isShown
  }
}
