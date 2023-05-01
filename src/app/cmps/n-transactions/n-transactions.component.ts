
import { Component ,Output,EventEmitter} from '@angular/core';
import Chart from 'chart.js/auto'
import { BitCoinService } from 'src/app/services/bit-coin.service';
import {Subscription} from 'rxjs' 
@Component({
  selector: 'n-transactions',
  templateUrl: './n-transactions.component.html',
  styleUrls: ['./n-transactions.component.scss']
})
export class NTransactionsComponent {
  constructor(private BitCoinService:BitCoinService){}
  chart:any
  data!:any
  subscription!:Subscription
  @Output () close= new EventEmitter ()
  ngOnInit(): void {
   this.subscription = this.BitCoinService.fatchData('n-transactions')
        .subscribe(res=>{
          this.data= res
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
            label: "number of transactions pre day",
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
