import { Component } from '@angular/core'
import { FormBuilder, FormControl, FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';


@Component({
    templateUrl: './sign-up-2.component.html'
})

export class SignUp2Component {

    signUpForm: FormGroup;

    submitForm(): void {
        for (const i in this.signUpForm.controls) {
            this.signUpForm.controls[ i ].markAsDirty();
            this.signUpForm.controls[ i ].updateValueAndValidity();
        }

        this.authService.register(this.signUpForm.value).subscribe(res=>{
            this.router.navigate(['/authentication/login'])
        },((error)=>{
            this.message.error(error.error)
       }))
    }

    updateConfirmValidator(): void {
        Promise.resolve().then(() => this.signUpForm.controls.checkPassword.updateValueAndValidity());
    }

    confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
        if (!control.value) {
            return { required: true };
        } else if (control.value !== this.signUpForm.controls.password.value) {
            return { confirm: true, error: true };
        }
    }

    constructor(private message: NzMessageService,private fb: FormBuilder,private authService:AuthenticationService,private router:Router) {
    }

    ngOnInit(): void {
        this.signUpForm = this.fb.group({
            firstName         : [ null, [ Validators.required ] ],
            lastName         : [ null, [ Validators.required ] ],
            email            : [ null, [ Validators.required ] ],
            password         : [ null, [ Validators.required ] ],
            checkPassword    : [ null, [ Validators.required, this.confirmationValidator ] ],
            phone    : [ null, [ Validators.required ] ],
         });
    }
}    