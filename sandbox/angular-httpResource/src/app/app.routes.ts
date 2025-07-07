import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./nx-welcome.component').then(c => c.NxWelcomeComponent)
    },
    {
        path: 'basic',
        loadComponent: () => import('./basic/basic.component').then(c => c.BasicComponent)
    }
];

export default appRoutes;
