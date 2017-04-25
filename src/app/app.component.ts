import { Component } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormGroup, FormControl, FormBuilder,Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  template:'<register></register>',
 //templateUrl: './app.component.html',
})

export class AppComponent {
  // title = 'app works!';
}

