import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CREATE} from "../graphql/graphql.queries";
import {Apollo} from "apollo-angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  error: any;

  employeeForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required)
  });

  constructor(private apollo: Apollo, private router: Router,) {
  }

  ngOnInit(): void {

  }

  addEmployee() {
    this.apollo.mutate({
      mutation: CREATE,
      variables: {
        firstname: this.employeeForm.value.firstname,
        lastname: this.employeeForm.value.lastname,
        email: this.employeeForm.value.email,
        username: this.employeeForm.value.username
      },
      refetchQueries: []
    }).subscribe(({data}: any) => {
        this.router.navigate(['/employees']);
      }
      , (error) => {
        this.error = error;
      }
    );

  }
}
