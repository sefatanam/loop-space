import { Routes } from "@angular/router";
import { ExtractPaths } from "@loop-space/utils";

export type AnimationsRoutes = ExtractPaths<typeof appRoutes, "">;

const appRoutes = [
	{
		path: "",
		loadComponent: () => import("./app.component").then((m) => m.AppComponent),
		children: [
			// {
			// 	path: "basic",
			// 	loadComponent: () => BasicComponent,
			// },
			// {
			// 	path: "enable-disable",
			// 	loadComponent: () => EnableDisableComponent,
			// },
			// {
			// 	path: "enter-leave",
			// 	loadComponent: () => EnterLeaveComponent,
			// },
			// {
			// 	path: "keyframe",
			// 	loadComponent: () => KeyframeComponent,
			// },
		],
	},
] as const;

export default appRoutes as unknown as Routes;
