import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../../class/user';
import { Theme } from '../../class/theme';
import { UserService } from '../../services/user.service';
import { ThemeService } from '../../services/theme.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-list-theme',
  templateUrl: './list-theme.component.html',
  styleUrls: ['./list-theme.component.scss']
})
export class ListThemeComponent implements OnInit, OnDestroy {
  themes: Theme[];
  user: User;
  user_id: number;
  current_theme: Theme;
  current_theme_id: number;
  private sub: any;

  constructor(private router: Router, private themeService: ThemeService, private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getThemes();
    this.sub = this.route.params.subscribe(params => {
      this.current_theme_id = + params['id'];
      this.user_id = + params['user']; // (+) converts string 'id' to a number
      console.log(this.user_id);
   });
   this.getTheme();
   this.getUser();
  }
  getThemes(): void {
    this.themeService.getThemes()
    .subscribe(themes => this.themes = themes);
  }
  getTheme(): void {
    const id = this.current_theme_id;
    this.themeService.getTheme(id)
      .subscribe(current_theme => this.current_theme = current_theme);
  }
  getUser(): void {
    const id = this.user_id;
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }
  goQuest(theme, lesson, index) {
    console.log('*****************************');
    console.log(theme + ' ' + lesson + ' ' + index);
    console.log('*****************************');
    this.router.navigate(['theme', this.user.id, theme, lesson, index]);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
