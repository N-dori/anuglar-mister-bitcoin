import { Component } from '@angular/core';
import { User } from 'src/app/models/contact/user.model';
import { BitCoinService } from 'src/app/services/bit-coin.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
constructor(private BitCoinService: BitCoinService, private UserService:UserService){}
rate=0
isShown=true
loggedinUser:User|null=this.UserService.getLoggedinUser()

ngOnInit(){
if(!this.user)this.tuggleModal()
this.BitCoinService.bitCoinRate().subscribe(res=>{
  console.log('res',res);
  this.rate= res
})
}
tuggleModal(){
  this.isShown = !this.isShown
}
get tansactionsToContact(){
  if(!this.user)return 
  return this.user?.moves.slice(this.user?.moves.length-3,this.user?.moves.length)
}

get user():User{
 return  this.UserService.getLoggedinUser()
}
}
