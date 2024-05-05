import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

 
import { Login2Component } from './login-2/login-2.component';
 
import { SignUp2Component } from './sign-up-2/sign-up-2.component';
 

const routes: Routes = [
 
    {
        path: 'login',
        component: Login2Component,
        data: {
            title: 'Login 2'
        }
    },
    {
        path: 'sign-up',
        component: SignUp2Component,
        data: {
            title: 'Sign Up 2'
        }
    },
  
     
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthenticationRoutingModule { }
