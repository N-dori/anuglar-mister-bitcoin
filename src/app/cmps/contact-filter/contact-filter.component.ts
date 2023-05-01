import { Component} from '@angular/core';
import { ContactFilter } from 'src/app/models/contact/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})

export class ContactFilterComponent {
constructor(private ContactService:ContactService){}
contactFilter = {} as ContactFilter
destroySubject$ = new Subject<null>()
filterSubject$ = new Subject()
svg={
  search:'https://res.cloudinary.com/dii16awkb/image/upload/v1682949339/search_FILL0_wght400_GRAD0_opsz24_g0eyvt.svg',
  phone:'https://res.cloudinary.com/dii16awkb/image/upload/v1682949507/call_FILL0_wght400_GRAD0_opsz24_ljsqwt.svg,',
  mail:'https://res.cloudinary.com/dii16awkb/image/upload/v1682949567/mail_FILL0_wght400_GRAD0_opsz24_wyxhob.svg'

}

ngOnInit(){
this.ContactService.contactsFilter$
.pipe(
  takeUntil(this.destroySubject$),
)
.subscribe(contactFilter=>{
  this.contactFilter = contactFilter
})
this.filterSubject$
.pipe(
    takeUntil(this.destroySubject$),
    debounceTime(400),
    distinctUntilChanged()
)
.subscribe(() => {
    console.log('calling query');
    this.ContactService.setFilter(this.contactFilter)
})
}
onSetFilter(val:string){
  this.filterSubject$.next(val)

  // this.ContactService.setFilter(this.contactFilter)
}
OnDestroy(){
  this.destroySubject$.next(null)
  this.destroySubject$.complete()
}
}
