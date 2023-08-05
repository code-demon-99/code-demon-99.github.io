import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = '';
  constructor( private titleServ:Title){

  }
  ngOnInit(): void {
    this.titleServ.setTitle(this.title)
  }



}
