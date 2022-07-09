import { NgModule } from '@angular/core';
import { AdminDashboardComponent } from './dashboard/admin.dashboard'
import { Routes, RouterModule } from "@angular/router";


const myRoutes: Routes = [
    { path: "", component: AdminDashboardComponent },
]


@NgModule({
    declarations: [
        AdminDashboardComponent
    ],
    imports: [
        RouterModule.forChild(myRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AdminRoutingModule { }
