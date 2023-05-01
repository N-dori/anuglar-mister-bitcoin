import { Component, Output,EventEmitter } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/contact/user.model';
import { UserService } from 'src/app/services/user.service';




@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent {
  constructor(private UserService:UserService){}
  @Output() close =new EventEmitter()
  subscription!: Subscription
  users:User[]|null =null
  users$!:Observable<User[]>
  user!:User

  ngOnInit(){
    this.user = this.UserService.getEmptyUser()
  }
  onSignup(){
    console.log('onSignup before',this.user);
    
    this.UserService.saveUser(this.user)
    this.login(this.user)
    this.close.emit()
    this.UserService.getLoggedinUser()

  }
  login(user:User){
    this.UserService.saveLoggedinUser('loggedinUser',user)
  }
  getLoggedinUser(){
    return this.UserService.getLoggedinUser('loggedinUser')
  }
}
