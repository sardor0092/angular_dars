import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
submitted =false;

  constructor(public fb:FormBuilder){}
  ngOnInit(): void {
   console.log(this.registerForm);
   
  }

  registerForm =  this.fb.group({
    file: [null],
    fullName:this.fb.group({
      firstName:[
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern('^[a-z0-9_-]{8,15}$')


        ],
      ],
      lastName:['' ,[Validators.required]],
     

    }),
    email:[''],
    phoneNumber:[''],
    adrees:this.fb.group({
      street:[''],
      city:[''],
      cityName:[''],

    }),


    gender:[''],
    PasswordValidation:this.fb.group({
      password:[''],
      confirmPassword:['']

    }),

  })

  obSubmit(){
    this.submitted = false;
    if(!this.registerForm.valid){
      console.log("tekshirish");
      return false;
      
    }

    else {
      return console.log(this.registerForm.value);
      
    }
    
  }


}
