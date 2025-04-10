export interface ExtractRoute {
	path: string;
	children?: readonly ExtractRoute[];
}

/** Usage example
export type UserPaths = ExtractPaths<typeof routes, "user">;

const routes = [
  {
    path: '',
    loadComponent: () => import('./admin.component').then(c => c.AdminComponent),
    children: [
      {
        path: 'dashboard',
        title: 'Dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent),
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'currency/index',
        title: 'Setup Currency',
        loadComponent: () => import('./currency/index/index.component').then(c => c.IndexComponent),
        data: {
          title: 'Setup Currency'
        }
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }
] as const;

export interface SidebarMenuItem {
  title: string;
  icon: string;
  link: `/${UserPaths}`;
  isActive?: boolean;
}

export const sidebarMenuItems: SidebarMenuItem[] = [
  { title: 'Dashboard', icon: 'fas fa-th-large', link: '/user/dashboard', isActive: true }, // ✅
  { title: 'Receive Money', icon: 'fas fa-receipt', link: '/user/currency/indexy' }, // 🚫 because this path does not exist
];

*/
export type ExtractPaths<
	T extends readonly ExtractRoute[],
	Prefix extends string = "",
> = {
	[K in keyof T]: T[K] extends ExtractRoute
		? T[K]["path"] extends ""
			? T[K]["children"] extends readonly ExtractRoute[]
				? ExtractPaths<T[K]["children"], Prefix>
				: never
			:
					| `${Prefix extends "" ? "" : `${Prefix}/`}${T[K]["path"]}`
					| (T[K]["children"] extends readonly ExtractRoute[]
							? ExtractPaths<
									T[K]["children"],
									`${Prefix extends "" ? "" : `${Prefix}/`}${T[K]["path"]}`
								>
							: never)
		: never;
}[number];
// export type ExtractPaths<
// 	T extends readonly ExtractRoute[],
// 	Prefix extends string = "",
// > = {
// 	[K in keyof T]: T[K] extends ExtractRoute
// 		? T[K]["path"] extends ""
// 			? T[K]["children"] extends readonly ExtractRoute[]
// 				? ExtractPaths<T[K]["children"], Prefix>
// 				: never
// 			:
// 					| `${Prefix}/${T[K]["path"]}`
// 					| (T[K]["children"] extends readonly ExtractRoute[]
// 							? ExtractPaths<T[K]["children"], `${Prefix}/${T[K]["path"]}`>
// 							: never)
// 		: never;
// }[number];
