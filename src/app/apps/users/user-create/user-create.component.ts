import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  userForm: FormGroup;
  

   

   

  constructor(private fb: FormBuilder, private modalService: NzModalService, private message: NzMessageService,

    private userService:UserService
  ) {
  }

  ngOnInit(): void {
      this.userForm = this.fb.group({
          firstName: [ null, [ Validators.required ] ],
          lastName: [ null, [ Validators.required ] ],
          email: [ null, [ Validators.required ] ],
          phone: [ null, [ Validators.required ] ],
          role: [ null, [ Validators.required ] ],
          password: [ null, [ Validators.required ] ],
          confirmPassword: [ null, [ Validators.required ] ]
      });
  }

  showConfirm(): void {
      this.modalService.confirm({
          nzTitle  : '<i>Do you want to change your password?</i>',
          nzOnOk   : () => this.message.success('Password Change Successfully')
      });
  }

  submitForm(): void {
      for (const i in this.userForm.controls) {
          this.userForm.controls[ i ].markAsDirty();
          this.userForm.controls[ i ].updateValueAndValidity();
      }

     
     this.userService.createDemande(this.userForm.value).subscribe(res=>{
        this.message.success('User create Successfully')
     },(error=>{
        this.message.error(error.error)
 
        
     }))
     
  }
}    