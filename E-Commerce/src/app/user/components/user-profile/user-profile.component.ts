import { Component, OnInit } from '@angular/core';

import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

 
  currentUser: any;

  constructor(private token:LoginService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getToken();
   
   
      
    
  }

}
