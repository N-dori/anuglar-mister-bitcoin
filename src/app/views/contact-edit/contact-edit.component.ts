import { Component,Input, Output,EventEmitter} from '@angular/core';
import { Contact } from 'src/app/models/contact/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { Observable, Subscription ,switchMap ,map,filter} from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})

export class ContactEditComponent {
  constructor(private ContactService:ContactService,
    private route:ActivatedRoute,
    private router:Router ){}
  url = "https://robohash.org/"

  subscription!: Subscription
  contact: Contact =this.ContactService.getEmptyContact()
  contact$!: Observable<Contact>

  @Input ()  currContactId!:string|null
  ngOnInit(){
this.subscription = this.route.params
    .pipe(
      map(params => params['id']),
      filter(id=>id),
        switchMap(id=> this.ContactService.getContactById(id))
      )
      .subscribe(
        contact => {
          console.log('contact',contact);
          this.contact= contact
          
        }
      )
   
  }
  onSave(){
    this.ContactService.saveContact(this.contact).subscribe({
      next: () => this.router.navigateByUrl('/contacts'),
      error: err => console.log('err:', err)
    })
   
  }
 
  ngOnDestroy():void{
    this.subscription.unsubscribe()

  }
}
