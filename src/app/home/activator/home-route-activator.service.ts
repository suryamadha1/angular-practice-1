import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot,  CanActivateChild,  Router,  RouterStateSnapshot} from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "src/app/services/user.services";

@Injectable()

export class HomeRouteActivator implements CanActivateChild {
    constructor(private userService: UserService, private router: Router){

    }
    canActivateChild(route: ActivatedRouteSnapshot) {
        const isLogged = this.userService.isLogged;
        if(!isLogged)
            this.router.navigate(['login'])
        return isLogged

    }
}