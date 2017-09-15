import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserListService } from '../shared/user-list/user-list.service';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  providers: [UserListService]
})
export class LoginComponent {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;

  constructor(fb:FormBuilder, public router: Router, public userListService:UserListService) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }


  getUser(email, password) {
    this.userListService.get(email)
      .subscribe(
        res => {
          console.log(res);
          if(res === password)
            this.router.navigateByUrl('/about');
          else
            this.router.navigateByUrl('/login');
        },
        error => console.log(error)
      );
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      this.getUser(values['email'],values['password']);
    }
  }
}
