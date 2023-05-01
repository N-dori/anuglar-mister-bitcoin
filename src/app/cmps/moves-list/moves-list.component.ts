import { Component,Input } from '@angular/core';
import { Contact } from 'src/app/models/contact/contact.model';
import { Move } from 'src/app/models/contact/user.model';

@Component({
  selector: 'moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss']
})
export class MovesListComponent {
@Input() tansactionsToContact!:Move[]|undefined
@Input() contact!:Contact
}
