import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
  
 
 
const routes: Routes = [
     
    {
        path: '',
        component: HomeComponent,
        data: {
            title: 'Home'
        }
    },
    {
        path: 'about-us',
        component: AboutusComponent,
        data: {
            title: 'Home'
        }
    },
   
    
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SiteRoutingModule { }
