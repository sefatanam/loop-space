import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-multiple-in-parallal',
  imports: [CommonModule],
  template: `<p>multiple-in-parallal works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultipleInParallalComponent {}
