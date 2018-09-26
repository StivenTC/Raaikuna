import { Component, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../../class/user';
import { Theme } from '../../class/theme';
import { UserService } from '../../services/user.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {
  theme: Theme;
  user: User;
  item_id: number;
  theme_id: number;
  lesson_id: number;
  user_id: number;
  private sub: any;
  actualQuest = 0;
  quest: any[];

  constructor(private router: Router, private themeService: ThemeService, private userService: UserService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.user_id = + params['user']; // (+) converts string 'id' to a number
      this.theme_id = + params['theme'];
      this.lesson_id = + params['lesson'];
      this.item_id = + params['item'];
    });
    this.getTheme();
    this.getUser();
  }

  nextQuest() {
    if (this.actualQuest !== this.theme.lessons[0].items[this.item_id].quests.length) {
      this.actualQuest += 1;
    } else {
      this.goThemes();
    }
  }

  getTheme(): void {
    const id = this.theme_id;
    console.log('*****' + this.theme_id + '********');
    this.themeService.getTheme(id)
      .subscribe(theme => this.theme = theme);
  }
  getUser(): void {
    const id = this.user_id;
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }
  goThemes() {
    console.log('===========================================');
    console.log(this.theme);
    console.log('===========================================');
    this.router.navigate(['list-theme', 0, this.user_id]);
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
