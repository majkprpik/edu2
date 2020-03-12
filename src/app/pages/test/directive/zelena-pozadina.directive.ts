import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[zelenaPozadina]'
})
export class ZelenaPozadinaDirective implements OnInit{

  constructor(private elemRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'green')
  }
}
