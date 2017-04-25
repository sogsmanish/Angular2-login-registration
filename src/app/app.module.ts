import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {User} from './register/register';
//import { CustomValidators } from './shared/CustomValidators';
import EqualValidator from './shared/equal-validator.directive';


// import {UserService} from './shared/user.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EqualValidator
  //  CustomValidators
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  // UserService
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule {

}



// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
// import { APP_BASE_HREF } from '@angular/common';
// import { AppComponent } from './app.component';

// //import {RegisterComponent} from './register/register.component';

// @NgModule({
//   declarations: [ AppComponent ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     HttpModule
//    // RegisterComponent
//   ],
//   providers: [{
//     provide:APP_BASE_HREF,
//     useValue:'<%= APP_BASE %>'
//   }],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
