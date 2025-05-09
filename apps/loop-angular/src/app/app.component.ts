import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from "@loop-space/shared-ui";
import { LoopAngularRoutes } from "./app.routes";

@Component({
	imports: [RouterModule, NavbarComponent],
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css",
	host: {
		class: "block mx-auto container ",
	},
})
export class AppComponent {
	appRoutes: { name: string; url: LoopAngularRoutes }[] = [
		{
			url: "animations",
			name: "Animations",
		},
		{
			url: "directives",
			name: "Directives",
		},
		{
			url:"httpResource",
			name: "Http Resource",
		}
	];
}
