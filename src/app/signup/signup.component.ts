import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { RegistrationService } from '../services/registration.service';
import { User } from '../services/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  genres = [
    {id: 1, name: "Masculin"},
    {id: 2, name: "Feminin"}
  ];
 selectedValue = null;

   user = new User();
  
  constructor(private _service: RegistrationService) { }

  ngOnInit() {
  }

  registerUser(){
  this._service.registraionUserFromRemote(this.user).subscribe(
    data => console.log("Response received"),
    error => console.log("exception occured")
    
  )
  }

}
