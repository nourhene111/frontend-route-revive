import { Component, OnInit, TemplateRef } from '@angular/core';
import { ResourceService } from 'src/app/shared/services/resource.service';
import { TableService } from 'src/app/shared/services/table.service';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UserService } from 'src/app/shared/services/user.service';

interface DataItem {
    id: number;
    name: string;
    date: string;
    amount: number;
    status:  string;
}
@Component({
  selector: 'app-equipe-list',
  templateUrl: './equipe-list.component.html',
  styleUrls: ['./equipe-list.component.css']
})
export class EquipeListComponent implements OnInit {
  allChecked: boolean = false;
  indeterminate: boolean = false;
  displayData = [];
  searchInput: string
  equipeList: any = []
  equipeForm: FormGroup;
  membreList:any=[]
  selectedMembers:any


  constructor(private modalService: NzModalService, private tableSvc: TableService,private userService:UserService,
    private resourceService: ResourceService, private fb: FormBuilder, private message: NzMessageService) {
  }
  ngOnInit(): void {

    this.equipeForm = this.fb.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      quantite: [0, [Validators.required]],
      status: [null, [Validators.required]],
      membre: [null, [Validators.required]],
    });
    this.getEquipeList()
    this.getMembrList()
  }
  showNewProject(newProjectContent: TemplateRef<{}>) {
    const modal = this.modalService.create({
      nzTitle: 'Create New Equipe',
      nzContent: newProjectContent,
      nzFooter: [

      ],
      nzWidth: 800
    })
  }


  search() {
    const data = this.equipeList
    this.displayData = this.tableSvc.search(this.searchInput, data)
  }
  getEquipeList() {
    this.resourceService.getAllEquipe().subscribe(res => {
      this.equipeList = res

    })
  }
  getMembrList(){
    this.userService.getMembrList().subscribe(res=>{
      this.membreList=res
    })
  }
  submitForm() {
    for (const i in this.equipeForm.controls) {
      this.equipeForm.controls[ i ].markAsDirty();
      this.equipeForm.controls[ i ].updateValueAndValidity();
  
  }
  if(this.equipeForm.valid){
    this.resourceService.createEquipe(this.equipeForm.value).subscribe(res => {
      this.message.success('Equipe create Successfully')
      this.getEquipeList()
      this.modalService.closeAll()
    })
  }
  }
  
}    