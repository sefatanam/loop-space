import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from "@loop-space/ng-animations";

@Component({
  selector: 'app-animation',
  imports: [CommonModule, BasicComponent],
  templateUrl: './animation.component.html',
  styles: ``,
})
export class AnimationComponent { }
