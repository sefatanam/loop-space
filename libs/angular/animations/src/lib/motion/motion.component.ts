import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MotionDirective } from "@loop-space/directives";

@Component({
	selector: "lan-motion",
	imports: [CommonModule, MotionDirective],
	templateUrl: "./motion.component.html",
	host: {
		class: "block w-92",
	},
})
export class MotionComponent {
	isPanelOpen = false;

	togglePanel() {
		this.isPanelOpen = !this.isPanelOpen;
	}
}
