import { Routes } from "@angular/router";
import { BasicComponent, MotionComponent } from "@loop-space/animations";
import { ExtractPaths } from "@loop-space/utils";
 
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
