import { NgModule } from '@angular/core';
import { AdminDashboardComponent } from './dashboard/admin.dashboard'
import { Routes, RouterModule } from "@angular/router";
import { AdminCourseComponent } from './course/course.dashboard';


const myRoutes: Routes = [
    {
        path: "", component: AdminDashboardComponent, children: [
            { path: "course", component: AdminCourseComponent }
        ],
    },
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
