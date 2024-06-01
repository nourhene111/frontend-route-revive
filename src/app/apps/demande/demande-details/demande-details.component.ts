import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DemandeService } from 'src/app/shared/services/demande.service';
import { PlanificationService } from 'src/app/shared/services/planification.Service';
import { ResourceService } from './../../../shared/services/resource.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AuthenticationService } from './../../../shared/services/authentication.service';

@Component({
    selector: 'app-demande-details',
    templateUrl: './demande-details.component.html',
    styles: [`
  :host ::ng-deep .ant-tabs-nav-wrap {
     padding: 0px 25px;
  }

  :host ::ng-deep .ant-timeline-item-head-custom {
      margin-top: 10px;
  }
`]
})
export class DemandeDetailsComponent {
    equipeList: any
    equipementList: any
    vehiculeList: any
    demande: any
    selectedPriority: string
    checked: boolean = false;
    vehiculeID:number
    equipeID:number
    equipementID:number
    id: number
    role:string=''
    constructor(
        private router: ActivatedRoute, private demandeService: DemandeService,
        private resourceService: ResourceService,
        private planificationService: PlanificationService,
        private message: NzMessageService,private authenticationService:AuthenticationService
    ) { }

    ngOnInit(): void {
        
   this.authenticationService.getRoleValue().subscribe(res=>{
    console.log(res);
    this.role=res
    
   })

        this.router.params.subscribe((res: any) => {
            this.id = res.id

            this.getPlanification(res.id)

        })
        this.getEquipeList()
        this.getEquipementList()
        this.getVehiculeList()
    }

    getEquipeList() {
        this.planificationService.getPlanificationDemande(this.id).subscribe((result: any) => {
            console.log(result);
            this.resourceService.getAllEquipe().subscribe((res: any) => {
                console.log(res);

                console.log(res[0].id === result.demande.equipeID);

                this.equipeList = res.map(item => ({
                    id: item.id,
                    name: item.name,
                    checked: item.id === result.equipe
                }));
                console.log(this.equipeList);

            })

        })
    }
    isChecked(item) {
        return true
    }
    toggleChecked(item: any): void {
        item.checked = !item.checked;
    }
    getEquipementList() {
        this.planificationService.getPlanificationDemande(this.id).subscribe((result: any) => {
            console.log(result);
            this.resourceService.getAllEquipement().subscribe((res:any) => {
                console.log(res);
               
                this.equipementList = res.map(item => ({
                    id: item.id,
                    name: item.name,
                    checked: item.id === result.equipement
                }));
            })

        })
    }

   


    getVehiculeList() {
        
   

        this.planificationService.getPlanificationDemande(this.id).subscribe((result: any) => {
            console.log(result);
            this.resourceService.getAllVehicule().subscribe((res:any) => {
             
                
                this.vehiculeList = res.map(item => ({
                    id: item.id,
                    name: item.name,
                    checked: item.id === result.vehicule
                }));

                console.log(this.vehiculeList);
                
            })

        })
    }

    getPlanification(id) {
        this.planificationService.getPlanificationDemande(id).subscribe(res => {
            console.log();

            this.demande = res
            this.selectedPriority = this.demande?.demande?.priorite

        })
    }

    onChangePriority() {
        console.log(this.selectedPriority);

        this.planificationService.updatePeriority(this.demande.demande.id, this.selectedPriority).subscribe(res => {
            this.message.success("Preiority updated")

        })

    }


    handleChangeVehicule(id:any){
       this.vehiculeID=id
    }
    handleChangeEquipe(id:any){
        console.log(id);
        
        this.equipeID=id
     }
     handleChangeEquipement(id:any){
        this.equipementID=id
     }

     updateEquipe(){
        this.planificationService.updateEquipe(this.id,this.equipeID).subscribe(res=>{
            this.getEquipeList()
            this.message.success("Added successfully")
        })
     }

     
     updateEquipement(){
        this.planificationService.updateEquipement(this.id,this.equipementID).subscribe(res=>{
            this.getEquipementList()
            this.message.success("Added successfully")
        })
     }

     
     updateVehicule(){
        this.planificationService.updateVehicule(this.id,this.vehiculeID).subscribe(res=>{
            this.getVehiculeList()
            this.message.success("Added successfully")
        })
     }
}