import { Component } from '@angular/core'
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';


@Component({
    templateUrl: './login-2.component.html'
})

export class Login2Component {
    loginForm: FormGroup;

    submitForm(): void {
        for (const i in this.loginForm.controls) {
            this.loginForm.controls[ i ].markAsDirty();
            this.loginForm.controls[ i ].updateValueAndValidity();
        }

        this.authenticationService.login(this.loginForm.value.email,this.loginForm.value.password).subscribe(res=>{
             
            
            this.router.navigate(['/dashboard/default'])
            
        },((error)=>{
             this.message.error(error.error)
        }))
    }

    constructor( private message: NzMessageService,private fb: FormBuilder,private authenticationService:AuthenticationService,private router:Router) {
    }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            email: [ null, [ Validators.required ] ],
            password: [ null, [ Validators.required ] ]
        });
    }
}    