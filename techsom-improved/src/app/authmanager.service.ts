import { Injectable } from '@angular/core';

import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';


@Injectable()


export class AuthManager implements CanActivate {
    constructor(private router:Router){

    }

    canActivate(next:ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if (window.localStorage.getItem('auth_key') == 'success'){
        return true;
        }else {
        console.log('Your must be logged in');
        this.router.navigate(['/log']);
        return false;
    }
}
}