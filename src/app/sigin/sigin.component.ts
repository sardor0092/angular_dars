import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginValidators } from './login.validators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.scss']
})
export class SiginComponent implements OnInit {

  constructor(private authSerive: AuthService) { }


  form = new FormGroup({
    login: new FormControl('', [
      

      Validators.required,
      Validators.minLength(3),
      LoginValidators.noSpace
    ], LoginValidators.isTaken),

    password: new FormControl('', Validators.required)

  })

  // get login(){
  //   return this.form.get("login")


  // }


  sigIn() {
    let isValid = this.authSerive.sigIn(this.form.value);
    if (!isValid) {
      this.form.setErrors({
        invalaidLogin: true

      })
    }


  }




  get login() {

    return this.form.get('login');

  }

  get password() {

    return this.form.get('password');

  }



  registerForm() {

  }






  ngOnInit(): void {

    console.log(this.login);


  }

}
