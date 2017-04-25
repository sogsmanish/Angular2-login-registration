
import { Component, Input, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators, ReactiveFormsModule,NgModelGroup,FormControl } from '@angular/forms';
import {UserService} from '../shared/user.service';
import {User} from './register';
import  CustomValidators from '../shared/CustomValidators';
import  EqualValidator from '../shared/equal-validator.directive';


export const USERS: User[] = [
  { FirstName: "john", Email:"hello@gamil",Password:"hello@123", Gender:"Male",Nationality:"American"},
   { FirstName: "Neha", Email:"ht@gamil", Password:"pas@123",Gender:"Female", Nationality:"Indian"}
];

@Component({
  selector:'register',
  templateUrl:'./register.component.html',

})

export class RegisterComponent implements OnInit{
user:any={}
usersList=USERS;
 nationality = ['Indian', 'American','Australian','Russian', 'Other'];
 myform:FormGroup;
  
constructor(private formBuilder: FormBuilder) {}

 ngOnInit(): void {
    // this.myform = this.formBuilder.group({
    //   email: ['', [Validators.required, CustomValidators.validateEmail]]
    // });
   
  }

submitted = false;

onSubmit() { this.submitted = true; }

// Reset the form with a new hero AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)
  active = true;


  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   * newUser : User[]
   */

addInfo():void {
    // TODO: implement nameListService.post
    this.usersList.push(this.user);
    this.user={};   
  this.active = false;
    setTimeout(() => this.active = true, 0);
  }
    resetForm():void{
   this.user={};   

  }
}











