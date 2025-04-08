import { Route } from "@angular/router";

export const appRoutes: Route[] = [
	{
		path: "animations",
		loadChildren: () => import("@sandbox/angular-animations/app.routes"),
	},
	{
		path: "directives",
		loadChildren: () => import("@sandbox/angular-directives/app.routes"),
	},
];
