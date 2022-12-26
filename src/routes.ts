import { HomeComponent } from "./app/home/home.component";
import {LoginComponent} from "./app/login/login.component";
import {Routes}  from "@angular/router";
import { ChildComponent } from "./app/child/child.component";
import {NotFoundComponent} from "./app/404/404.component"
import { RegisterComponent } from "./app/register/register.component";
import { InventoryComponent } from "./app/inventory/inventory.component";
import { HomeRouteActivator } from "./app/home/activator/home-route-activator.service";

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivateChild: [HomeRouteActivator],
        children: [
            {
                path: 'child',
                component: ChildComponent
            },
            {
                path: 'inventory',
                component: InventoryComponent
            }
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
// {
//     path: 'login', component: LoginComponent
// },
// {
//     path: '', pathMatch: 'full', component: HomeComponent
// }