import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GraphQLModule} from './service/graphql.module';
import {HttpClientModule} from '@angular/common/http';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {LoginComponent} from './login/login.component';
import {AuthService} from "./service/auth.service";
import {EmployeeDetailComponent} from './employee-detail/employee-detail.component';
import {RegisterComponent} from './register/register.component';
import {UpdateEmployeeComponent} from './update-employee/update-employee.component';
import {CreateEmployeeComponent} from './create-employee/create-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    LoginComponent,
    EmployeeDetailComponent,
    RegisterComponent,
    UpdateEmployeeComponent,
    CreateEmployeeComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
