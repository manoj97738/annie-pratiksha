import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminDashboardComponent } from "./admin/dashboard/admin.dashboard";


const myRoutes: Routes = [
    { path: "", component: AdminDashboardComponent }
]


@NgModule({
    declarations: [
        AdminDashboardComponent
    ],
    imports: [
        RouterModule.forRoot(myRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class RoutingModule { }
