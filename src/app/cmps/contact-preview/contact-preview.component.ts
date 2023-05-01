import { Component ,Input,Output,EventEmitter} from '@angular/core';
import { Contact } from 'src/app/models/contact/contact.model';
import { User } from 'src/app/models/contact/user.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent {
  url = "https://robohash.org/"
  svg ={
    remove:'https://res.cloudinary.com/dii16awkb/image/upload/v1682946339/svg/delete_FILL0_wght400_GRAD0_opsz24_g9vkrf.svg',
    details:'https://res.cloudinary.com/dii16awkb/image/upload/v1682946339/svg/info_FILL0_wght400_GRAD0_opsz24_yc5hbv.svg',
    payments:'https://res.cloudinary.com/dii16awkb/image/upload/v1682946339/svg/payments_FILL0_wght400_GRAD0_opsz24_fhdmu1.svg',
    edit:'https://res.cloudinary.com/dii16awkb/image/upload/v1682946339/svg/edit_FILL0_wght400_GRAD0_opsz24_fyge3t.svg'
  }
@Input() contact!: Contact
@Output() remove = new EventEmitter<string>()
@Output() tranferFunds = new EventEmitter<Contact>()

onRemoveContact(contactId:string|undefined){
  this.remove.emit(contactId)
}

onTranferFunds(contact:Contact){
this.tranferFunds.emit(contact)
}
}
