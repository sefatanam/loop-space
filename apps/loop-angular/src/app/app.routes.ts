import { Route } from "@angular/router";
import { ExtractPaths } from "@loop-space/utils";

export type LoopAngularRoutes = ExtractPaths<typeof appRoutes, "">;

export const appRoutes = [
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
] as const;

export default appRoutes as unknown as Route[];
