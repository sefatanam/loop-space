import { Route } from "@angular/router";

export const appRoutes: Route[] = [
	{
		path: "animations",
		// eslint-disable-next-line @nx/enforce-module-boundaries
		loadChildren: () => import("@sandbox/angular-animations/app.routes"),
	},
	{
		path: "directives",
		// eslint-disable-next-line @nx/enforce-module-boundaries
		loadChildren: () => import("@sandbox/angular-directives/app.routes"),
	},
];
