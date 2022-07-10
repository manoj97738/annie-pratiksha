import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminSubCourseComponent } from 'src/app/admin/course/subcourse/subcourse.dashboard';

@Injectable({ providedIn: 'root' })
export class AdminDeactivateGuard implements CanDeactivate<AdminSubCourseComponent> {
    canDeactivate(
        component: AdminSubCourseComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const isediting = sessionStorage.getItem("isediting");
        if (isediting == "true") {
            const r = confirm("You have unsaved changes");
            if (r === true) {
                sessionStorage.setItem("isediting", "false")
            }
            return false;
        }
        return true
    }
}