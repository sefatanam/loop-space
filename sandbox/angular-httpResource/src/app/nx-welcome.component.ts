import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule],
  template: ` <div
      class="flex flex-col items-center justify-center min-h-screen py-6 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div>
        <h1 class="text-4xl font-bold text-gray-900">
          Welcome from the HttpResource Sandbox!
        </h1>
        <p class="mt-2 text-lg text-gray-600">
          This is a sample application using Angular and Nx.
        </p>
      </div>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
