import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';




export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
 
];


// import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';

// @NgModule({
//   imports: [
//     RouterModule.forRoot([
//       /* define app module routes here, e.g., to lazily load a module
//          (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
//        */
//     ])
//   ],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

