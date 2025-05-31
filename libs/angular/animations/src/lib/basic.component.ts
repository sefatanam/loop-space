import { Component, signal } from "@angular/core";
import { CommonModule, NgTemplateOutlet } from "@angular/common";
import {
	trigger,
	state,
	style,
	animate,
	transition,
} from "@angular/animations";
import { ButtonDirective } from "@loop-space/shared-ui";

@Component({
	template: `
    <button libButton (click)="toggleAccordion()">Toggle Accordion</button>
    <section class="flex gap-4 border-t-2 my-4">
      <div class="flex-1">
        <ng-container
          *ngTemplateOutlet="
            heading;
            context: { $implicit: 'Without Animation' }
          "
        />
        <div class="border-b border-slate-200 w-64">
          <button
            (click)="toggleAccordion()"
            class="w-full flex justify-between items-center py-5 text-slate-800"
          >
            <span>What is Material Tailwind?</span>
            <span
              id="icon-1"
              class="text-slate-800 transition-transform duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="w-4 h-4"
              >
                <path
                  d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"
                />
              </svg>
            </span>
          </button>
          <div
            id="content-1"
            class="overflow-hidden transition-all duration-300 ease-in-out"
            [class.max-h-0]="!isOpen()"
            [class.max-h-40]="isOpen()"
          >
            <div class="pb-5 text-sm text-slate-500">
              Material Tailwind is a framework that enhances Tailwind CSS with
              additional styles and components.
            </div>
          </div>
        </div>
      </div>

      <div class="flex-1">
        <ng-container
          *ngTemplateOutlet="heading; context: { $implicit: 'With Animation' }"
        />
        <div class="border-b border-slate-200 w-64">
          <button
            (click)="toggleAccordion()"
            class="w-full flex justify-between items-center py-5 text-slate-800"
          >
            <span>What is Material Tailwind?</span>
            <span
              id="icon-1"
              class="text-slate-800 transition-transform duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="w-4 h-4"
              >
                <path
                  d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"
                />
              </svg>
            </span>
          </button>
          <div
            id="content-1"
            class="overflow-hidden transition-all duration-300 ease-in-out"
            [@openClose]="isOpen() ? 'open' : 'closed'"
          >
            <div class="pb-5 text-sm text-slate-500">
              Material Tailwind is a framework that enhances Tailwind CSS with
              additional styles and components.
            </div>
          </div>
        </div>
      </div>
    </section>

    <ng-template #heading let-title>
      <p class="text-xl font-semibold">{{ title }}</p>
    </ng-template>
  `,
	selector: "lan-basic",
	imports: [CommonModule, ButtonDirective, NgTemplateOutlet],
	animations: [
		trigger("openClose", [
			state("open", style({ height: "100px" })),
			state("closed", style({ height: "0" })),
			transition("open => closed", [animate("0.6s ease-in-out")]),
		]),
	],
})
export class BasicComponent {
	isOpen = signal(false);
	toggleAccordion() {
		this.isOpen.update((prev) => !prev);
	}
}
