import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-pet-element',
  templateUrl: './pet-element.component.html',
  styleUrls: ['./pet-element.component.css']
})
export class PetElementComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit, 
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  @Input() name: string;
  @ViewChild('heading', { static: true}) header: ElementRef;

  constructor() {
    console.log("Constructor called");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called");
  }

  ngOnInit() {
    console.log("ngOnInit called");
    console.log("Text content: " + this.header.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log("ngDoCheck called");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit called");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called");
    console.log("Text content: " + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called");
  }

  

}
