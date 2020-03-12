import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[boldMouseOver]'
})
export class BoldMouseOverDirective implements OnInit{

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elemRef.nativeElement, 'font-weight', 'bold')
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elemRef.nativeElement, 'font-weight', 'normal')
  }

  constructor(private elemRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {

  }
}
