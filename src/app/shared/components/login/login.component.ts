import { AuthService } from './../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    taiKhoan: new FormControl(''),
    matKhau: new FormControl(''),
  });

  constructor(private authservice: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onLogin() {
    console.log(this.loginForm.value);
    this.authservice.login(this.loginForm.value).subscribe(
      (data) => {
        localStorage.setItem('currentUser', JSON.stringify(data.content));
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
