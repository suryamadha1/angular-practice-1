import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/routes';
import { HomeComponent } from './home/home.component';
import { HomeRouteActivator } from './home/activator/home-route-activator.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.services';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, LoginComponent, RegisterComponent, TodoItemComponent, ParentComponent, ChildComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [UserService, HomeRouteActivator],
  bootstrap: [AppComponent],
})
export class AppModule {}
