import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSample]',
  standalone: true,
})
export class SampleDirective {
  @HostBinding('value') inputValue: string = 'Hi there!';

  @HostListener('focus') logMessage() {
    console.log('Input has been focused drom sample directive');
  }

  constructor() {}
}
