import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};
  // represent is an observable
  // currentUser$: Observable<User | null> = of(null);

  constructor(
    public accountService: AccountService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  login() {
    this.accountService.login(this.model).subscribe({
      // if we don't need a response we can use this syntax _ ()
      next: (_) => {
        this.router.navigateByUrl('/members');
      },
      // error: (err) => {
      //   // toastr is applied here
      //   this.toastr.error(err.error);
      // },
    });
  }

  logout() {
    this.accountService.logout();
    // when the user is log out the page will be redirect to home page
    this.router.navigateByUrl('/');
  }
}
