import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { Router } from '@angular/router';

import { User } from '../../class/user';
import { Theme } from '../../class/theme';
import { UserService } from '../../services/user.service';
import { ThemeService } from '../../services/theme.service';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  users: User[];
  themes: Theme[];

  selectedValue = 0;
  userName = '';
  errorMsg = '';
  seeError = false;
  seeModal = false;

  progress = [{
    theme_id: 1,
    actual_quest: 0,
    complete: false,
  }];

  constructor(private router: Router, private userService: UserService, private themeService: ThemeService, private translateService: TranslateService) {
  }

  ngOnInit() {
    this.getUsers();
    this.getThemes();
  }
  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }
  getThemes(): void {
    this.themeService.getThemes()
    .subscribe(themes => this.themes = themes);
  }

  submitUser() {
    if (this.userName.length < 5) {
      this.showError('errors.short_name');
    } else if (this.userName.length > 80) {
      this.showError('errors.long_name');
    } else if (this.userName.indexOf(' ') < 1) {
      this.showError('errors.incomplete_name');
    } else if (this.selectedValue < 1) {
      this.showError('errors.invalid_cycle');
    } else {
      this.addUser(this.userName, this.selectedValue, 1);
      this.seeModal = false;
    }
  }

  addUser(name: string, cycle: number, activeTheme: number): void {
    name = name.trim();
    if (!name || !cycle) { return; }
    this.userService.addUser({ name, cycle, activeTheme } as User)
      .subscribe(user => {
        this.users.push(user);
        console.log(user);
      });
  }

 /* User {
    id: number;
    name: string;
    cycle: number;
    activeTheme: number;
    progress: [{
      theme_id: number,
      actual_quest: number,
      complete: boolean;
  }];*/

  delete(user: User): void {
    this.users = this.users.filter(h => h !== user);
    this.userService.deleteUser(user).subscribe();
  }

  showModal() {
    this.seeModal = !this.seeModal;
  }

  showError(error) {
    this.translateService.get(error).subscribe(res => this.errorMsg = res);
    this.seeError = true;
    setTimeout(() => {
      this.seeError = false;
    },
    2000);
  }
  goThemes(user) {
    this.router.navigate(['list-theme', user.activeTheme, user.id]);
  }

}
