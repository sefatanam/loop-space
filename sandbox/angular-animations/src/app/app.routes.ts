import { Routes } from "@angular/router";

export const appRoutes: Routes = [
	{
		path: "",
		loadComponent: () =>
			import("./nx-welcome.component").then((c) => c.NxWelcomeComponent),
	},
	{
		path: "h",
	}
];

export default appRoutes;
