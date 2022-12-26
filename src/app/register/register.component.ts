import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";


@Component({
    selector: 'register',
    templateUrl: './register.component.html'
})

export class RegisterComponent {
    registerForm = this.formBuilder.group({
        name: '',
        password: '',
        email: ''
    }) 
    constructor(private formBuilder: FormBuilder){
        
    }
    onSubmit(){
        
    }
}