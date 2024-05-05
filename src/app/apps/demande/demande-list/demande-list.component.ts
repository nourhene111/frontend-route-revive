import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { NzModalService } from 'ng-zorro-antd/modal';
import { shareReplay } from 'rxjs/operators';
import { ProjectList } from 'src/app/shared/interfaces/project-list.type';
import { AppsService } from 'src/app/shared/services/apps.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { DemandeService } from 'src/app/shared/services/demande.service';
import { TableService } from 'src/app/shared/services/table.service';

@Component({
  selector: 'app-demande-list',
  templateUrl: './demande-list.component.html',
  styleUrls: ['./demande-list.component.css']
})
export class DemandeListComponent implements OnInit {

  view: string = 'listView';
  newProject: boolean = false;
  demandeListRaw: any[];
  demandeList: any[];
  searchInput: string;
  demandeForm: FormGroup;
  role:string=''
  img:any =null;
   file:File
  constructor (private fb: FormBuilder,private projectListSvc: AppsService, private modalService: NzModalService,
     private tablesvc : TableService,private demandeService:DemandeService,private authService:AuthenticationService,
     private _sanitizer: DomSanitizer
    ) {}

  ngOnInit(): void {

   this.authService.getRoleValue().subscribe(res=>{
    console.log(res);
    this.role=res
    
   })

   if(this.role=="User"){
    this.getMyDemande()
   }else{
    this.getAllDemande()
   }
   
    
    
    this.demandeForm = this.fb.group({
        localisation: [ null, [ Validators.required ] ],
        description: [ null, [ Validators.required ] ]
    });
      
  }

  search() {
      const data = this.demandeListRaw
      this.demandeList = this.tablesvc.search(this.searchInput, data )
  }

  showNewProject(newProjectContent: TemplateRef<{}>) {
      const modal = this.modalService.create({
          nzTitle: 'Create New Project',
          nzContent: newProjectContent,
          nzFooter: [
               
          ],
          nzWidth: 800
      })    
  }

  submitForm(): void {
    for (const i in this.demandeForm.controls) {
        this.demandeForm.controls[ i ].markAsDirty();
        this.demandeForm.controls[ i ].updateValueAndValidity();
    }

  this.demandeService.createDemande({data:this.demandeForm.value,file:this.file}).subscribe(res=>{
this.getMyDemande()
this.modalService.closeAll()
   }) 
}

getAllDemande(){
  this.demandeService.getAllDemande().subscribe((res:any)=>{
    console.log(res);
    this.demandeList=res
    this.demandeListRaw=res
    
  })
}
getMyDemande(){
  this.demandeService.getMyDemande().subscribe((res:any)=>{
    console.log(res);
    this.demandeList=res
    this.demandeListRaw=res
    
  })
}

onFileSelect(e:any){
  
  if(e.target.files[0]){
    this.file=e.target.files[0] as any
    const reader =new FileReader()
    reader.readAsDataURL(e.target.files[0] as File)
    reader.onload=(event:any)=>{
      this.img = this._sanitizer.bypassSecurityTrustResourceUrl(event.target.result)
    }
  }
}

}