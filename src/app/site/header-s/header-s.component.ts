import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-s',
  templateUrl: './header-s.component.html',
  styleUrls: ['./header-s.component.css']
})
export class HeaderSComponent implements OnInit {
  isLongin:boolean=false

  constructor() { 

    localStorage.getItem('token')?this.isLongin=true:this.isLongin=false
  }

  ngOnInit(): void {
  }

}
