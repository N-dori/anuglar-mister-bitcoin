import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact/contact.model';
import { Move, User } from 'src/app/models/contact/user.model';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';
import {Subscription, map ,switchMap,filter}from'rxjs'
@Component({
  selector: 'transfer-funds',
  templateUrl: './transfer-funds.component.html',
  styleUrls: ['./transfer-funds.component.scss']
})

export class TransferFundsComponent {
  constructor(private UserService:UserService,
     private ContactService:ContactService,
    private router:Router,
    private route:ActivatedRoute){}
  contact!:Contact
  contact$!:Contact
  subscription!:Subscription
  url='https://robohash.org/'
  loggdinUser:User|null=this.UserService.getLoggedinUser()
  move:Move=this.UserService.getEmpyMove()

  
  ngOnInit () {
  this.subscription= this.route.params.pipe(
    map(params=>params['id']),
    filter(id=>id),
    switchMap(id=>this.ContactService.getContactById(id))
    ).subscribe(contact => {
      console.log('contact',contact);
          this.contact= contact
    }
    )

  }
  
  get tansactionsToContact ():Move[]{
    const userTransactions = this.loggdinUser?.moves
    const transactionsToContact = userTransactions!.filter(move => move.toId === this.contact._id) 
    return transactionsToContact
  }
  onSaveContact(){
    this.move.toId = this.contact._id as any
    this.move.to = this.contact.name
    console.log('this.move',this.move);
    
    this.move.at = new Date().toLocaleTimeString()
  this.UserService.handelFundsTransfer(this.move)
  this.loggdinUser = this.UserService.getLoggedinUser()
  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
