import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MotionDirective } from "@loop-space/directives";

@Component({
	selector: "lan-motion",
	imports: [CommonModule, MotionDirective],
	templateUrl: "./motion.component.html",
	styleUrl: './motion.component.css',
	host: {
		class: "block w-92",
	},
})
export class MotionComponent {
	isPanelOpen = false;
	isSearchOpen = false;
	isWelcomeOpen = false;

	togglePanel() {
		this.isPanelOpen = !this.isPanelOpen;
	}

	toggleSearch() {
		this.isSearchOpen = !this.isSearchOpen;
	}

	toggleWelcome() {
		this.isWelcomeOpen = !this.isWelcomeOpen;
	}
}
