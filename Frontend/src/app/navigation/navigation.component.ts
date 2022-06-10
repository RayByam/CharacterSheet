import { Component, AfterViewInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements AfterViewInit {

  constructor(
    public userService: UserService,
  ) {
  }
  
  ngAfterViewInit(): void {
 
  }
  selectUser(user: any) {
    this.userService.current_user= user
  }
}
