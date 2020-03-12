import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[setColorDirective]'
})
export class SetColorDirectiveDirective {
  @Input() set setColorDirective(color: string) {
    this.textColor = color;
  }
  
  @HostBinding('style.color') textColor = 'black;'
  constructor() { }

}
