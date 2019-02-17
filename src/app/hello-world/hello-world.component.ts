import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  users = ['Ruben', 'Ye Ye', 'Frank', 'Miguel', 'Mom', 'Dad'];
  activated: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
