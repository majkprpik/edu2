import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[directiveWithMainProperty]'
})
export class DirectiveWithMainPropertyDirective implements OnInit {
  @Input('directiveWithMainProperty') inputTextColor;
  @HostBinding('style.color') textColor: string = 'black';

  @HostListener('click') mouseclick(eventData: Event) {
    this.textColor = this.inputTextColor;
  }

  constructor(private elemRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}
}