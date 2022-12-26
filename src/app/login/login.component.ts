import { Component } from "@angular/core";
import {FormBuilder, FormControl} from "@angular/forms";
import { UserService } from "../services/user.services";

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
})

export class LoginComponent{
    constructor(private userService: UserService, private formBuilder: FormBuilder){
        
    }
    loginForm = this.formBuilder.group({
        email: new FormControl(''),
        password: new FormControl('')
    })
    onSubmit(): void {
        this.userService.login(this.loginForm.value);
        this.loginForm.reset();
    }
}