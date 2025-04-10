import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lan-query-staggering',
  imports: [CommonModule],
  template: `<p>query-staggering works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QueryStaggeringComponent {}
