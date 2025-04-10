import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lan-unknown-height',
  imports: [CommonModule],
  template: `<p>unknown-height works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnknownHeightComponent {}
