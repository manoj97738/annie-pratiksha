import { NgModule } from '@angular/core';
import { ParentDashboardComponent } from './dashboard/parents.dashboard'
import { Routes, RouterModule } from "@angular/router";


const myRoutes: Routes = [
    { path: "", component: ParentDashboardComponent },
]


@NgModule({
    declarations: [
        ParentDashboardComponent
    ],
    imports: [
        RouterModule.forChild(myRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class ParentsRoutingModule { }
