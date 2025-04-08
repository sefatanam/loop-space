import { Component, signal } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
	imports: [RouterModule],
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css",
})
export class AppComponent {
	showFlyOutMenu = signal(true);
	toggleFlyOutMenu() {
		this.showFlyOutMenu.update((prev) => !prev);
	}

	appRoutes = [
		{
			url: "animations",
			name: "Animations",
		},
		{
			url: "directives",
			name: "Directives",
		},
	] as const;
}
