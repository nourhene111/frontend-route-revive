import { Component } from '@angular/core';
import { ThemeConstantService } from '../../services/theme-constant.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { NotifService } from '../../services/socketService.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{

    searchVisible : boolean = false;
    quickViewVisible : boolean = false;
    isFolded : boolean=false;
    isExpand : boolean=false;
    userInfo:any
     notif=0;
     role:string =''
    notificationList :any= [];
    constructor( 
        private srv:NotifService,
        private themeService: ThemeConstantService,private router:Router,private authService:AuthenticationService) {}

    ngOnInit(): void {
        this.authService.getRoleValue().subscribe(res=>{
            this.role=res
        })
        this.srv.listen('dataUpdate').subscribe((res:any)=>{
            console.log(res);
            this.notif++;
            this.notificationList.unshift(JSON.parse(res))
            console.log(this.notificationList);
            
        })

        this.authService.getCurrentUserValue().subscribe(res=>{
            console.log(res);
            
            this.userInfo=res
            
        })
        this.themeService.isMenuFoldedChanges.subscribe(isFolded => this.isFolded = isFolded);
        this.themeService.isExpandChanges.subscribe(isExpand => this.isExpand = isExpand);
    }

    toggleFold() {
        this.isFolded = !this.isFolded;
        this.themeService.toggleFold(this.isFolded);
    }

    toggleExpand() {
        this.isFolded = false;
        this.isExpand = !this.isExpand;
        this.themeService.toggleExpand(this.isExpand);
        this.themeService.toggleFold(this.isFolded);
    }

    searchToggle(): void {
        this.searchVisible = !this.searchVisible;
    }

    quickViewToggle(): void {
        this.quickViewVisible = !this.quickViewVisible;
    }

 

    logout(){
        this.router.navigate(['/authentication/login'])
        this.authService.logout()

    }
}
