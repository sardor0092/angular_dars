import { NgModule } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SiginComponent } from './sigin/sigin.component';
import { AuthService } from './auth.service';
import { OrderFormComponent } from './order-form/order-form.component';




@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    SiginComponent,
    OrderFormComponent,

    
  
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    


  ],
  providers: [ AuthService],
  bootstrap: [AppComponent]
})








export class AppModule { }
