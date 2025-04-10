import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavData } from "./route-items.data";

@Component({
	imports: [RouterModule],
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
			url: "enable-disable",
			title: "Enable / Disable Animation",
		},
		{
			url: "enter-leave",
			title: "Enter / Leave Animation",
		},
		{
			url: "keyframe",
			title: "Keyframe Animation",
		},
	];
}
