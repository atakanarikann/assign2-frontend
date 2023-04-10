import {Component, OnInit} from '@angular/core';
import {ALL, DELETE} from "../graphql/graphql.queries";
import {Apollo} from 'apollo-angular';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];
  error: any;


  deleteEmployee(id: bigint) {
    console.log(id)
    this.apollo.mutate({
      mutation: DELETE,
      variables: {
        id: id,
      },
      refetchQueries: [{
        query: ALL
      }]
    }).subscribe(({data}: any) => {
        this.employees = data.findAll;
      }
      , (error) => {
        this.error = error;
      }
    );
  }

  constructor(private apollo: Apollo) {
  }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: ALL
    }).valueChanges.subscribe(({data, error}: any) => {
        console.log(data)
        this.employees = data.findAll;
        this.error = error;
      }
    );
  }

}
