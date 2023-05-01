import { Component, Input,Output ,EventEmitter} from '@angular/core';
import { BitCoinService } from 'src/app/services/bit-coin.service';
import {Subscription} from 'rxjs'
import Chart from 'chart.js/auto'

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  constructor(private BitCoinService:BitCoinService){}
chart:any
@Input () type!:string
@Output () close= new EventEmitter ()
data!:any
subscription!:Subscription

ngOnInit(): void {
  this.subscription = this.BitCoinService.fatchData(`${this.type}`)
       .subscribe(res=>{
         this.data= res
         console.log('this.data',this.data);
         
       this.createChart()
       })
       
 }
 timeFormater(){
   let formatedData1:string[] =[]
   let options = {  year:'numeric', month:'short' }
 
      this.data.forEach((value:any) =>{
      const dateTimeFormat3 = new Intl.DateTimeFormat('en-US', options as any)
      const date1 = new Date(parseInt(value.x.toString()+'000'));
      
      let formatedTime= dateTimeFormat3.format(date1)
      formatedData1.push(formatedTime)
      console.log('formatedData1',value.x);
 
      })
 
 return formatedData1
 }
 
 createChart(){
   
   this.chart = new Chart("MyChart", {
     type: 'line', //this denotes tha type of chart
 
     data: {// values on X-Axis
       labels:this.timeFormater(), 
        datasets: [
         {
           label: `${this.type}`,
           data: this.data.map((e:any)=>e.y),
           backgroundColor: 'blue'
         },
        
       ]
     },
     options: {
       aspectRatio:2.5
     }
     
   });
 }
 ngOnDestroy(){
   this.subscription.unsubscribe()
 }
 onCloseModal(){
 this.close.emit()
 }
}
