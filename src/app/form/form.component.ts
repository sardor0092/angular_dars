import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {







 form =  new FormGroup({
  kurslar:new FormArray([
    // new FormControl("IT"),
    // new FormControl("I"),
  ]),
 });



 








 get kurslar():FormArray{
  return this.form.get('kurslar') as FormArray;
 }



 addKurs(){
  this.kurslar.push(new FormControl());
 }


 onSubmit(){
  console.log(this.kurslar.value);

  console.log(this.form.value);
  
 }




//  setKurs(){
//   this.kurslar.patchValue(['dSD' ,'ETF'])
//  }









}
