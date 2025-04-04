import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    "path":"animation",
    loadComponent:()=> import("./pages/animation.component").then(c=>c.AnimationComponent)
  }
];
