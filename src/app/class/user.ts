export class User {
    id: number;
    name: string;
    cycle: number;
    activeTheme: number;
    activeLesson: number;
    progress: [{
      theme_id: number;
      actual_quest: number;
      complete: boolean;
  }];
}
