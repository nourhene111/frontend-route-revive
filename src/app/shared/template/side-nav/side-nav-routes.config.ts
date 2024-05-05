import { SideNavInterface } from '../../interfaces/side-nav.type';

export const ROUTES: SideNavInterface[] = [
    {
        path: '',
        title: 'Dashboard',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'dashboard',
        submenu: [
            {
                path: '/dashboard/default',
                title: 'Default',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/dashboard/crm',
                title: 'CRM',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/dashboard/e-commerce',
                title: 'E-commerce',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/dashboard/projects',
                title: 'Projects',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
        ]
    },

    
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
        path: '',
        title: 'Apps',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'appstore',
        submenu: [
            {
                path: '/apps/chat',
                title: 'Chat',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/apps/file-manager',
                title: 'File Manager',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/apps/mail',
                title: 'Mail',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '',
                title: 'Projects',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                    {
                        path: '/apps/projects/project-list',
                        title: 'Project List',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/apps/projects/project-details',
                        title: 'Project Details',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                ]
            },
            {
                path: '',
                title: 'E-commerce',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                    {
                        path: '/apps/e-commerce/orders-list',
                        title: 'Orders List',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/apps/e-commerce/product',
                        title: 'Products',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/apps/e-commerce/products-list',
                        title: 'Products List',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    }
                ]
            }
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
    
    {
        path: '',
        title: 'Pages',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'file',
        submenu: [
            {
                path: '/pages/profile',
                title: 'Profile',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/pages/invoice',
                title: 'Invoice',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/pages/members',
                title: 'Members',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/pages/pricing',
                title: 'Pricing',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/pages/setting',
                title: 'Setting',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '',
                title: 'Blog',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                    {
                        path: '/pages/blog/blog-grid',
                        title: 'Blog Grid',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/pages/blog/blog-list',
                        title: 'Blog List',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/pages/blog/blog-post',
                        title: 'Blog Post',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    }
                ]
            }
        ]
    },
    {
        path: '',
        title: 'Authentication',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'lock',
        submenu: [
            {
                path: '/authentication/login-1',
                title: 'Login 1',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/authentication/login-2',
                title: 'Login 2',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/authentication/login-3',
                title: 'Login 3',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/authentication/sign-up-1',
                title: 'Sign Up 1',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/authentication/sign-up-2',
                title: 'Sign Up 2',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/authentication/sign-up-3',
                title: 'Sign Up 3',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/authentication/error-1',
                title: 'Error 1',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/authentication/error-2',
                title: 'Error 2',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            }
        ]
    }
]    