import { NgModule } from '@angular/core';
import { AdminDashboardComponent } from './dashboard/admin.dashboard'
import { Routes, RouterModule } from "@angular/router";


const myRoutes: Routes = [
    {
        path: "", component: AdminDashboardComponent, children: [
            { path: 'course', loadChildren: () => import("./course/course.module").then((mod) => mod.AdminCourseModule) }
        ]
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
