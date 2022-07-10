import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AdminDeactivateGuard } from 'src/app/_services/guards/admin.deactivate.guards';
import { AdminGuard } from 'src/app/_services/guards/admin.guards';

import { AdminCourseComponent } from './crud/course.dashboard';
import { AdminSubCourseComponent } from './subcourse/subcourse.dashboard';


const myRoutes: Routes = [
    {
        path: "", component: AdminCourseComponent, data: { manoj: "10lakhs" }, children: [
            { path: "subcourse/:subcourseid", canDeactivate: [AdminDeactivateGuard], canActivate: [AdminGuard], component: AdminSubCourseComponent, data: { manoj: "10lakhs" } }
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
