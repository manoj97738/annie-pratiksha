import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { AdminCourseComponent } from './crud/course.dashboard';
import { AdminSubCourseComponent } from './subcourse/subcourse.dashboard';


const myRoutes: Routes = [
    {
        path: "", component: AdminCourseComponent, children: [
            { path: "subcourse", component: AdminSubCourseComponent }
        ]
    },
]


@NgModule({
    declarations: [
        AdminCourseComponent,
        AdminSubCourseComponent
    ],
    imports: [
        RouterModule.forChild(myRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AdminCourseRoutingModule { }
