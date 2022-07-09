import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { } from "./admin/dashboard/admin.dashboard";


const myRoutes: Routes = [
    { path: "admin", loadChildren: () => import("./admin/admin.module").then(mod => mod.AdminModule) },
    { path: "parents", loadChildren: () => import("./parents/parents.module").then(mod => mod.ParentsModule) },

    // { path: "**", component:   }
]


@NgModule({
    declarations: [

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
