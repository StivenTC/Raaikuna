export class Theme {
    id: number;
    title: string;
    icon: string;
    description: string;
    lessons: [{
      lesson_id: number;
      title: string;
      items: [{
        title: string;
        icon: string;
        quests: any[];
      }];
  }];
}

