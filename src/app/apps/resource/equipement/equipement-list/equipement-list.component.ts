import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ResourceService } from 'src/app/shared/services/resource.service';
import { TableService } from 'src/app/shared/services/table.service';

@Component({
  selector: 'app-equipement-list',
  templateUrl: './equipement-list.component.html',
  styleUrls: ['./equipement-list.component.css']
})
export class EquipementListComponent implements OnInit {
  allChecked: boolean = false;
  indeterminate: boolean = false;
  displayData = [];
  searchInput: string
  equipementList: any = []
  equipementForm: FormGroup;



  constructor(private modalService: NzModalService, private tableSvc: TableService,
    private resourceService: ResourceService, private fb: FormBuilder, private message: NzMessageService) {
  }
  ngOnInit(): void {

    this.equipementForm = this.fb.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      quantite: [0, [Validators.required]],
      status: [null, [Validators.required]]
    });
    this.getEquipementList()

  }
  showNewProject(newProjectContent: TemplateRef<{}>) {
    const modal = this.modalService.create({
      nzTitle: 'Create New Equipement',
      nzContent: newProjectContent,
      nzFooter: [

      ],
      nzWidth: 800
    })
  }


  search() {
    const data = this.equipementList
    this.displayData = this.tableSvc.search(this.searchInput, data)
  }
  getEquipementList() {
    this.resourceService.getAllEquipement().subscribe(res => {
      this.equipementList = res

    })
  }

  submitForm() {
    this.resourceService.createEquipement(this.equipementForm.value).subscribe(res => {
      this.message.success('Equipement create Successfully')
      this.getEquipementList()
      this.modalService.closeAll()
    })
  }
}    