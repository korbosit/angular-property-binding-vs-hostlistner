import { Component } from '@angular/core';
import { SampleDirective } from '../CustomDirectives/sample.directive';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [SampleDirective],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
})
export class DemoComponent {
  textValue: string = 'Hello, world!';

  logValue() {
    console.log('Input has been focused!');
  }
}
