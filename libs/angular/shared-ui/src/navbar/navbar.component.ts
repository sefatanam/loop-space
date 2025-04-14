import { Component, input, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
	selector: "lib-navbar",
	imports: [CommonModule, RouterModule],
	templateUrl: "./navbar.component.html",
	styleUrl: "./navbar.component.css",
})
export class NavbarComponent {
	appRoutes = input.required<{ name: string; url: string }[]>();
	showFlyOutMenu = signal(true);
	toggleFlyOutMenu() {
		this.showFlyOutMenu.update((prev) => !prev);
	}
}
