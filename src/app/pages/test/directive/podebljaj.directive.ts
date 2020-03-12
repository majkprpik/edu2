import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[podebljaj]'
})
export class PodebljajDirective implements OnInit {

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.fontWeight = 'bold';  
  }
}
