import { Component , Input,Output,EventEmitter} from '@angular/core';
import { Contact } from 'src/app/models/contact/contact.model';
import { User } from 'src/app/models/contact/user.model';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {

  @Input() contacts!: Contact[]|null
  @Output() remove = new EventEmitter<string>()
  @Output() tranferFunds  = new EventEmitter<Contact>()
}
