import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { RegistrationService } from '../services/registration.service';
import { User } from '../services/user';
import { Router, ActivatedRoute } from '@angular/router';



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

   user:User
   code_person:number;

  constructor(private route: ActivatedRoute,private router: Router, private _service: RegistrationService) { }

  ngOnInit() {
    this.user = new User();
    this.	code_person = this.route.snapshot.params['code_person'] ;
    console.log(this.	code_person)
    this._service.getPerson(this.code_person).subscribe(data =>{

      console.log(data);
    }, error =>{
      console.log("Error");
    }
    )
  }

  registerUser(){
  this._service.registraionUserFromRemote(this.user).subscribe(
    data => console.log("Response received"),
    error => console.log("exception occured")
    
  )
  }
 
  getPerson(){
    this._service.getPerson(this.code_person).subscribe(data =>{
      
      console.log(data);
    }, error =>{
      console.log("Error");
    }
    )
  }

}
