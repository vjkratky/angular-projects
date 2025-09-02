import { Component } from '@angular/core';
import { Divider } from '@ui/index';
import { ItemsList } from './items-list/items-list';
import { Statistics } from './statistics/statistics';

@Component({
  selector: 'app-views',
  imports: [Statistics, Divider, ItemsList],
  templateUrl: './views.html',
  styleUrl: './views.scss',
})
export class Views {
  statistics: { label: string; value: number }[] = [];
  items: { imgSrc: string; title: string; description: string }[] = [];

  ngOnInit() {
    this.statistics = [
      {
        label: 'Favorites',
        value: 22,
      },
      {
        label: 'Page Views',
        value: 967,
      },
      {
        label: 'Users',
        value: 30,
      },
    ];

    this.items = [
      {
        imgSrc: '/images/couch.jpeg',
        title: 'Couch',
        description:
          'This is a great couch, the kind that you would want in your house!',
      },
      {
        imgSrc: '/images/dresser.jpeg',
        title: 'Dresser',
        description:
          'This is a great dresser, the kind that you would want in your house! ',
      },
    ];
  }
}
