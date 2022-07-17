import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { } from "./admin/dashboard/admin.dashboard";
import { LoginComponent } from "./login/login.component";
import { AdminGuard } from "./_services/guards/admin.guards";

import { UserGuard } from "./_services/guards/user.guards";

const myRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: "admin", loadChildren: () => import("./admin/admin.module").then(mod => mod.AdminModule) },
    { path: "parents", loadChildren: () => import("./parents/parents.module").then(mod => mod.ParentsModule), canActivate: [UserGuard] },
    // { path: "**", component:   }
]


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot(myRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class RoutingModule { }
