import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return true
    }
}