import { Routes } from "@angular/router";
import { DashboardLayoutComponent } from "./layout/dashboard-layout/dashboard-layout.component";
import { UserPageComponent } from "./pages/user-page/user-page.component";

const dashboardRoutes: Routes = [
    {
        path:'',
        component: DashboardLayoutComponent,
        children:[
            {
                path:'users',
                component: UserPageComponent
            },
            {
                path:'**',
                redirectTo:''
            },
        ],
    },
    {
        path:'**',
        redirectTo:''
    },
];

export default dashboardRoutes;