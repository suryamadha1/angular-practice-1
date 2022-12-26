import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { IUser } from "../model/user.model";

@Injectable()
export class UserService {
    baseUrl: string = "http://localhost:3000"
    isLogged: boolean = false
    user: IUser
    constructor(private http: HttpClient, private router: Router){

    }
    register(formValues){
        const {firstName, lastName, email, password } = formValues;
        const userObject : IUser = {
            firstName,
            lastName,
            email,
            password     
        }
        const headers = new HttpHeaders().set('Content-Type','application/json');
        this.http.post(this.baseUrl+'/users',userObject, {headers}).subscribe(
            data => {
                if(!data){
                    console.log('Register Failed')
                } else {
                    console.log(data)
                    this.isLogged = true
                    this.user = data[0]
                    this.router.navigate(['/home','inventory']);
                }
            }
        )
    }

    login(formValues){
        const {email, password} = formValues;
        this.http.get<IUser>(this.baseUrl+'/users?email='+email).subscribe(
            data => {
                console.log(data);
                let userObj = data[0];
                if(!data){
                    console.log("Login Failed");
                    this.router.navigate(['/register']);
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