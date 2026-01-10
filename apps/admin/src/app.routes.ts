import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: "",
        loadChildren: () => import("./pages/login/login")
    },
    {
        path: "",
        loadComponent: () => import("./pages/layouts/layouts"),
        children: [
            {
                path: "",
                loadChildren: () => import("./pages/home/home")
            },

        ]
    }
];
