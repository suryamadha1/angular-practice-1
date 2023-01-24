import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges, DoCheck {
  constructor() {
    console.log("Parent constructor ");
  }
  isChild: boolean = true;


  channelName = "";
  ngOnInit(): void {
    console.log("Parent OnInit");
  }

  ngOnChanges() {
    console.log("Parent OnChanges");
  }

  ngDoCheck() {
    console.log("Parent DoCheck");
  }


  toggleChild() {
    this.isChild = !this.isChild;
  }
}
