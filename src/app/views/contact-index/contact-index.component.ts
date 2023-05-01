import { Component ,Output ,EventEmitter} from '@angular/core';
import { Contact } from 'src/app/models/contact/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'contact-index',
  templateUrl: './contact-index.component.html',
  styleUrls: ['./contact-index.component.scss']
})
export class ContactIndexComponent {
constructor(private ContactService:ContactService,private router:Router){}
subscription!: Subscription
contacts: Contact[] | null = null
contacts$!: Observable<Contact[]>

@Output() add = new EventEmitter()

@Output() tranferFunds = new EventEmitter()

ngOnInit() {
  this.contacts$= this.ContactService.contacts$
  this.subscription = this.ContactService.contacts$.subscribe(
    contacts => {
      console.log('contacts',contacts);
      this.contacts= contacts   
    }
  )
}
addContact():void{
  this.router.navigateByUrl('/edit')

}
removeContact(contactId:string):void{
  
  this.subscription =this.ContactService.deleteContact(contactId).subscribe({
    error: err => console.log('err:', err)
})
}
ngOnDestroy():void{
  this.subscription.unsubscribe()
}
}
