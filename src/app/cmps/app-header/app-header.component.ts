import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {
  constructor(private router:Router){}
  @Output() routing = new EventEmitter<string>()
  isShown=false
  onToggelCmp(route: string) {
    console.log('route',route);
    
    this.routing.emit(route)
  }
  tuggleModal(){
    console.log('whatttttttt');
    
    this.isShown = !this.isShown
  }
  redirect(){
    console.log('holllllllllaaaaaaa');
    
    this.router.navigateByUrl('/')
  }
}
