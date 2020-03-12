import { Directive, OnInit, ElementRef, Renderer2, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[directiveWithProperty]'
})
export class DirectiveWithPropertyDirective implements OnInit{
  @Input('text-color') inputTextColor: string = 'black';
  @Input('highlight-color') highlightColor: string = 'yellow'
  @HostBinding('style.color') textColor: string;

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.textColor = this.highlightColor;
  }

  
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.textColor = this.inputTextColor;
  }

  constructor(private elemRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.textColor = this.inputTextColor;
  }
}
