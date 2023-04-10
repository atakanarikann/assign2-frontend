import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  errorMessage: string = '';

  ngOnInit(): void {
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  onSubmit(username: string, password: string): void {
    this.http.post<any>('https://graph-backend-1.herokuapp.com/register', {username, password})
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/']);
        },
        error => {
          this.errorMessage = error.error.message;
          console.log(error)
        }
      );
  }

}
