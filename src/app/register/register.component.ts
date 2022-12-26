import { Component } from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";
import { UserService } from "../services/user.services";


@Component({
    selector: 'register',
    templateUrl: './register.component.html'
})

export class RegisterComponent {
    registerForm = this.formBuilder.group({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        password: new FormControl(''),
        email: new FormControl('')
    }) 
    constructor(private formBuilder: FormBuilder, private userService: UserService){
        
    }
    onSubmit(){
        this.userService.register(this.registerForm.value)
        this.registerForm.reset()
    }
}