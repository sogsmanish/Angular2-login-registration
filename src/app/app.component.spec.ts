// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { TestBed } from '@angular/core/testing';
// import { APP_BASE_HREF } from '@angular/common';

// import {
//   async
// } from '@angular/core/testing';
// import {
//   Route
// } from '@angular/router';

// import {
//   RouterTestingModule
// } from '@angular/router/testing';
// import { AppComponent } from './app.component';

// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';

// export function main() {

//   describe('App component', () => {

//     let config: Route[] = [
//       { path: '', component: LoginComponent },
//       { path: 'register', component: RegisterComponent }
//     ];
//     beforeEach(() => {
//       TestBed.configureTestingModule({
//         imports: [FormsModule, RouterTestingModule.withRoutes(config)],
//         declarations: [TestComponent, AppComponent,
//           LoginComponent, RegisterComponent],
//         providers: [
//           { provide: APP_BASE_HREF, useValue: '/' }
//         ]
//       });
//     });

//     it('should build without a problem',
//       async(() => {
//         TestBed
//           .compileComponents()
//           .then(() => {
//             let fixture = TestBed.createComponent(TestComponent);
//             let compiled = fixture.nativeElement;

//             expect(compiled).toBeTruthy();
//           });
//       }));
//   });
// }


// class TestComponent {
// }


// // import { TestBed, async } from '@angular/core/testing';

// // import { AppComponent } from './app.component';

// // describe('AppComponent', () => {
// //   beforeEach(async(() => {
// //     TestBed.configureTestingModule({
// //       declarations: [
// //         AppComponent
// //       ],
// //     }).compileComponents();
// //   }));

// //   it('should create the app', async(() => {
// //     const fixture = TestBed.createComponent(AppComponent);
// //     const app = fixture.debugElement.componentInstance;
// //     expect(app).toBeTruthy();
// //   }));

// //   it(`should have as title 'app works!'`, async(() => {
// //     const fixture = TestBed.createComponent(AppComponent);
// //     const app = fixture.debugElement.componentInstance;
// //     expect(app.title).toEqual('app works!');
// //   }));

// //   it('should render title in a h1 tag', async(() => {
// //     const fixture = TestBed.createComponent(AppComponent);
// //     fixture.detectChanges();
// //     const compiled = fixture.debugElement.nativeElement;
// //     expect(compiled.querySelector('h1').textContent).toContain('app works!');
// //   }));
// // });
