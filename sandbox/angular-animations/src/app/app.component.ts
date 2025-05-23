import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavData } from "./route-items.data";
import { ButtonDirective } from "@loop-space/shared-ui";

@Component({
	imports: [RouterModule, ButtonDirective],
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css",
})
export class AppComponent {
	navItems: Readonly<NavData[]> = [
		{
			url: "basic",
			title: "Basic Animation",
		},
		{
			url: "motion",
			title: "Motion",
		},
		// {
		// 	url: "enable-disable",
		// 	title: "Enable / Disable Animation",
		// },
		// {
		// 	url: "enter-leave",
		// 	title: "Enter / Leave Animation",
		// },
		// {
		// 	url: "keyframe",
		// 	title: "Keyframe Animation",
		// },
	];
}
