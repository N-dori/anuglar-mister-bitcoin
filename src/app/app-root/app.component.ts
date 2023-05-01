import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact/contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent   {
  constructor(private contactService:ContactService){}
  title = 'mister-bit-coin'
  currContactId :string | null=null
  currContact!:Contact
  route = 'home'

  ngOnInit():void{
      this.contactService.loadContacts().subscribe({
        error:(err)=>console.log('err:',err)
        
      })
  }
  toggelCmp(route:string ):void{
    switch (route) {
      case 'home':
        console.log('hi home');
        
        this.route='home'
        break;
      case 'contacts':
        this.route='contacts'
        break;
      case 'edit':
        this.route='edit'
        break;
      case 'details':
        this.route='details'
        break;
      case 'transfer-funds':
        this.route='transfer-funds'
        break;
      default:
        break;
    }
 
  }
  handelFundsTransfer(contact:any){
this.currContact = contact
  }
  setSelectedContactId(contactId:string){
    this.currContactId = contactId 

  }
  unSetCurrContatct():void{
    this.currContactId =""
  }

}
