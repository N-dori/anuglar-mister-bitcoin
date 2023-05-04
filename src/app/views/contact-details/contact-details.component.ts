import { Component, Input,Output ,EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription,switchMap } from 'rxjs';
import { Contact } from 'src/app/models/contact/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent {
  constructor(private ContactService:ContactService,
     private route:ActivatedRoute ){}
  url='https://robohash.org/'
  subscription!: Subscription
  contact: Contact | null = null
  contact$!: Observable<Contact>
  @Input ()  currContactId!:any
  @Output () back = new EventEmitter() 
 
  ngOnInit(){
    this.contact$ = this.route.params.pipe(
      switchMap(params => {
        const contact= this.ContactService.getContactById(params['id'])   
        console.log('details contact',contact);
             
        return contact }),
        
        )
   
    // this.loadContact(this.currContactId)
  }
  getNextPrevId(contact:Contact,diff:number){
    console.log('hiiiiiiiiiiiiiiiiiiiiiii');
    
  const nextPrevId = this.ContactService.getNexPrevId(contact,diff)
  console.log('nextPrevId',nextPrevId);
  
  return nextPrevId
  }
  // loadContact(currContactId:string|undefined){
  //   this.contact$= this.ContactService.getContactById(currContactId)
  //   this.subscription = this.contact$.subscribe(
  //     currContact => {
  //       console.log('contact',currContact);
  //       this.contact= currContact
        
  //     }
  //   )

  // }
  // onPaging(nextPrevId:string|undefined):void{
  //   this.loadContact(nextPrevId)
  // }
  onBack():void{
// this.back.emit()
  }
 
}
