import { Routes } from "@angular/router";
import { ExtractPaths } from "@loop-space/utils";
import { BasicComponent, MotionComponent } from "@loop-space/animations";
export type AnimationsRoutes = ExtractPaths<typeof appRoutes, "">;

const appRoutes = [
	{
		path: "",
		loadComponent: () => import("./app.component").then((m) => m.AppComponent),
		children: [
			{
				path: "basic",
				component: BasicComponent,
			},
			{
				path: "motion",
				component: MotionComponent,
			},
		],
	},
] as const;

export default appRoutes as unknown as Routes;
