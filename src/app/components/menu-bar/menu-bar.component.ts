import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  ImagePath: string;
  constructor() {
    this.ImagePath = '/assets/images/logo.jpg'
   }

  ngOnInit(): void {
  }


}
