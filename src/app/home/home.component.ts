import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Todo } from "../models/todo.model";
import { UserService } from "../services/user.services";

@Component({
    templateUrl: './home.component.html',
    selector: 'home-component'
})

export class HomeComponent implements OnInit {
    
    todos$: Observable<Todo[]>

    constructor(private userService: UserService) {

    }
    ngOnInit(): void {
        this.todos$ = this.userService.getTodos();
    }
}