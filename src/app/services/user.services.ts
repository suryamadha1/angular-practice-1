import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { IUser } from "../model/user.model";

@Injectable()
export class UserService {
    baseUrl: string = "http://localhost:3000"
    isLogged: boolean = false
    constructor(private http: HttpClient, private router: Router){

    }
    register(formValues){
        const {firstName, lastName, email, password }= formValues;
        
    }

    login(formValues){
        const {email, password} = formValues;
        this.http.get<IUser>(this.baseUrl+'/users?email='+email).subscribe(
            data => {
                console.log(data);
                let userObj = data[0];
                if(!data){
                    console.log("Login Failed");
                    this.router.navigate(['register']);
                }
                else {
                    if(email === userObj.email && password === userObj.password){
                        console.log("Login Successful");
                        this.isLogged = true;
                        this.router.navigate(['/home','inventory']);
                    }
                }
            }
        );
    }
}