import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from './chat/chat.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { MailComponent } from './mail/mail.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { OrdersListComponent } from './e-commerce/orders-list/orders-list.component';
import { ProductsListComponent } from './e-commerce/products-list/products-list.component';
import { ProductComponent } from './e-commerce/product/product.component';
import { DemandeListComponent } from './demande/demande-list/demande-list.component';
import { EquipeListComponent } from './resource/equipe/equipe-list/equipe-list.component';
import { EquipementListComponent } from './resource/equipement/equipement-list/equipement-list.component';
import { ListVehiculeComponent } from './resource/vehicule/list-vehicule/list-vehicule.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { DemandeDetailsComponent } from './demande/demande-details/demande-details.component';

const routes: Routes = [
    {
        path: 'user-list',
        component: UserListComponent,
        data: {
            title: 'User List',
            headerDisplay: "true"
        }
    },
    {
        path: 'user-create',
        component: UserCreateComponent,
        data: {
            title: 'User Create',
            headerDisplay: "true"
        }
    },
    {
        path: 'demande-list',
        component: DemandeListComponent,
        data: {
            title: 'Demande List',
            headerDisplay: "true"
        }
    },
    {
        path: 'demande-details/:id',
        component: DemandeDetailsComponent,
        data: {
            title: 'Demande details',
            headerDisplay: "true"
        }
    },
    {
        path: 'chat',
        component: ChatComponent,
        data: {
            title: 'Chat',
            headerDisplay: "none"
        }
    },

    {
        path: 'equipe-list',
        component: EquipeListComponent,
        data: {
            title: 'Equipe',
            headerDisplay: "true"
        }
    },
    {
        path: 'vehicule-list',
        component: ListVehiculeComponent,
        data: {
            title: 'Véhicule',
            headerDisplay: "true"
        }
    },
    {
        path: 'equipement-list',
        component: EquipementListComponent,
        data: {
            title: 'Equipement',
            headerDisplay: "true"
        }
    },
    {
        path: 'file-manager',
        component: FileManagerComponent,
        data: {
            title: 'File Manager',
            headerDisplay: "none"
        }
    },
    {
        path: 'mail',
        component: MailComponent,
        data: {
            title: 'Mail',
            headerDisplay: "none"
        }
    },
    
     
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AppsRoutingModule { }
