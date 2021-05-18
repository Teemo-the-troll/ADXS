import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  url = 'https://app.fakejson.com/q';

  password = '';
  email = '';



  submit(): void{
    const body = {
      token: 'gqP81ZXXETmq4xIXZ_-_7A', // token for the fake api  TODO remove later
      data: {
        password: this.password,
        email: this.email
      }
    };

    this.http.post(this.url, body).subscribe(
      (data) => {
        console.log(data);
        this.router.navigateByUrl('/dashboard');
      }, (error) => {
        console.log(error);
      }
    );
  }

  constructor(private router: Router, private http: HttpClient) {
    this.router = router;
  }

  ngOnInit(): void {
  }

}
