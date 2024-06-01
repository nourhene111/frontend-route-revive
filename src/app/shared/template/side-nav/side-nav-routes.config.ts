import { SideNavInterface } from '../../interfaces/side-nav.type';

export const ROUTES: SideNavInterface[] = [
 

    
    {
        path: '',
        title: 'Users',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'appstore',
        submenu: [
            {
                path: '/apps/user-list',
                title: 'User List',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/apps/user-create',
                title: 'Create user',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            } 
        ]
    },
{
        path: '',
        title: 'Resource',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'appstore',
        submenu: [
            {
                path: '/apps/equipe-list',
                title: 'Equipe List',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/apps/vehicule-list',
                title: 'Véhicule list',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/apps/equipement-list',
                title: 'Equipement list',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
        ]
    },
    
  
    {
        path: '/apps/demande-list',
        title: 'Demande',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'pie-chart',
        submenu: [
        ]
    },
    
    
]    