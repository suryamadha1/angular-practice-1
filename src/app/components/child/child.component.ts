import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ContentChild, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterContentChecked {
  constructor() {
    console.log("Child constructor ");
  }

  @Input()
  channelName = "";

  @ContentChild("projected")
  projected: any;

  ngOnInit(): void {
    console.log("Child OnInit - ", this.projected);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    console.log("Child OnChanges - ", this.projected);
  }

  ngDoCheck() {
    console.log("Child DoCheck - ", this.projected);
    
  }

  ngAfterContentInit() {
    console.log("Child AfterContentInit - ", this.projected);
  }

  ngAfterContentChecked(): void {
    console.log("Child After Content Checked - ", this.projected);
  }

  ngAfterViewInit(): void {
    console.log("Child After View Init");
    
  }

  ngAfterViewChecked(): void {
    console.log("Child After View Checked");
    
  }

  ngOnDestroy(): void {
    console.log("Child OnDestroy");
  }
}
