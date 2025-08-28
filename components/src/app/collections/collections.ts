import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Divider } from '@ui/index';
import { Table } from './table/table';
import { Tabs } from './tabs/tabs';

@Component({
  selector: 'app-collections',
  imports: [Table, Divider, RouterModule, Tabs],
  templateUrl: './collections.html',
  styleUrl: './collections.scss',
})
export class Collections {
  data: { employed: boolean; name: string; age: number; job: string }[] = [];
  headers: { key: string; label: string }[] = [];

  ngOnInit() {
    this.data = [
      {
        employed: false,
        name: 'Vinicius',
        age: 34,
        job: 'Software Engineer',
      },
      {
        employed: true,
        name: 'Fernanda',
        age: 30,
        job: 'Veterinarian',
      },
      {
        employed: true,
        name: 'Denise',
        age: 61,
        job: 'School Teacher',
      },
    ];

    this.headers = [
      {
        key: 'employed',
        label: 'Has a job?',
      },
      {
        key: 'name',
        label: 'Name',
      },
      {
        key: 'age',
        label: 'Age',
      },
      {
        key: 'job',
        label: 'Job',
      },
    ];
  }
}
