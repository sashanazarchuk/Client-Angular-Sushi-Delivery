import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  user = new User();
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  register(user: User) {
    this.authService.register(user).subscribe();
  }

  login(user: User) {
    this.authService.login(user).subscribe();
}
  logout(user: User) {
    this.authService.logout(user).subscribe();
  }
}
