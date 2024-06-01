import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ResourceService } from 'src/app/shared/services/resource.service';
import { TableService } from 'src/app/shared/services/table.service';

@Component({
  selector: 'app-list-vehicule',
  templateUrl: './list-vehicule.component.html',
  styleUrls: ['./list-vehicule.component.css']
})
export class ListVehiculeComponent implements OnInit {
  allChecked: boolean = false;
  indeterminate: boolean = false;
  displayData = [];
  searchInput: string
  vehiculeList: any = []
  vehiculeForm: FormGroup;



  constructor(private modalService: NzModalService, private tableSvc: TableService,
    private resourceService: ResourceService, private fb: FormBuilder, private message: NzMessageService) {
  }
  ngOnInit(): void {

    this.vehiculeForm = this.fb.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      matricule: [null, [Validators.required]],
      status: [null, [Validators.required]]
    });
    this.getVehiculeList()

  }
  showNewProject(newProjectContent: TemplateRef<{}>) {
    const modal = this.modalService.create({
      nzTitle: 'Create New Vehicule',
      nzContent: newProjectContent,
      nzFooter: [

      ],
      nzWidth: 800
    })
  }


  search() {
    const data = this.vehiculeList
    this.displayData = this.tableSvc.search(this.searchInput, data)
  }
  getVehiculeList() {
    this.resourceService.getAllVehicule().subscribe(res => {
      this.vehiculeList = res

    })
  }

  submitForm() {
    for (const i in this.vehiculeForm.controls) {
      this.vehiculeForm.controls[ i ].markAsDirty();
      this.vehiculeForm.controls[ i ].updateValueAndValidity();
  
  }
  if(this.vehiculeForm.valid){
    this.resourceService.createVehicule(this.vehiculeForm.value).subscribe(res => {
      this.message.success('Vehicule create Successfully')
      this.getVehiculeList()
      this.modalService.closeAll()
    })
  }
}
}    