import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoopAngularRoutes } from "./app.routes";
import { TopNavComponent } from "@loop-space/shared-ui";
import { NavItem } from "@loop-space/utils";

@Component({
	imports: [RouterModule, TopNavComponent],
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css",
	host: {
		class: "block mx-auto container ",
	},
})
export class AppComponent {
	appRoutes: Array<NavItem<LoopAngularRoutes>> = [
		{
			url: "animations",
			name: "Animations",
		},
		{
			url: "directives",
			name: "Directives",
		},
		{
			url: "httpResource",
			name: "Http Resource",
		}
	];
}
