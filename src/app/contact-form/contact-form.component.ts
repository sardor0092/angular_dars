import { Component } from '@angular/core';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  onNameChange(ngModelObj){
    console.log(ngModelObj);
    
  }

  SubmitMetod(){
    alert("Yuborildi");
    
  }

}