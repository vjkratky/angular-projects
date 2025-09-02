import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Class } from './class';
import { Times } from './times';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Class, Times],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  currentPage = 0;
  images = [
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the forest',
      url: 'https://images.unsplash.com/photo-1440581572325-0bea30075d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'At the city',
      url: 'https://plus.unsplash.com/premium_photo-1672116452571-896980a801c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'At the carnaval',
      url: 'https://images.unsplash.com/photo-1544441452-326ff5a947fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcm5hdmFsfGVufDB8fDB8fHww',
    },
    {
      title: 'At the black hole',
      url: 'https://plus.unsplash.com/premium_photo-1690571200236-0f9098fc6ca9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3BhY2V8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the lighthouse',
      url: 'https://images.unsplash.com/photo-1434873740857-1bc5653afda8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG93ZXJ8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the forest',
      url: 'https://images.unsplash.com/photo-1440581572325-0bea30075d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'At the city',
      url: 'https://plus.unsplash.com/premium_photo-1672116452571-896980a801c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'At the carnaval',
      url: 'https://images.unsplash.com/photo-1544441452-326ff5a947fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcm5hdmFsfGVufDB8fDB8fHww',
    },
    {
      title: 'At the black hole',
      url: 'https://plus.unsplash.com/premium_photo-1690571200236-0f9098fc6ca9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3BhY2V8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the lighthouse',
      url: 'https://images.unsplash.com/photo-1434873740857-1bc5653afda8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG93ZXJ8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the forest',
      url: 'https://images.unsplash.com/photo-1440581572325-0bea30075d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'At the city',
      url: 'https://plus.unsplash.com/premium_photo-1672116452571-896980a801c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'At the carnaval',
      url: 'https://images.unsplash.com/photo-1544441452-326ff5a947fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcm5hdmFsfGVufDB8fDB8fHww',
    },
    {
      title: 'At the black hole',
      url: 'https://plus.unsplash.com/premium_photo-1690571200236-0f9098fc6ca9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3BhY2V8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the lighthouse',
      url: 'https://images.unsplash.com/photo-1434873740857-1bc5653afda8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG93ZXJ8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the forest',
      url: 'https://images.unsplash.com/photo-1440581572325-0bea30075d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'At the city',
      url: 'https://plus.unsplash.com/premium_photo-1672116452571-896980a801c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'At the carnaval',
      url: 'https://images.unsplash.com/photo-1544441452-326ff5a947fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcm5hdmFsfGVufDB8fDB8fHww',
    },
    {
      title: 'At the black hole',
      url: 'https://plus.unsplash.com/premium_photo-1690571200236-0f9098fc6ca9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3BhY2V8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the lighthouse',
      url: 'https://images.unsplash.com/photo-1434873740857-1bc5653afda8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG93ZXJ8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the forest',
      url: 'https://images.unsplash.com/photo-1440581572325-0bea30075d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'At the city',
      url: 'https://plus.unsplash.com/premium_photo-1672116452571-896980a801c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'At the carnaval',
      url: 'https://images.unsplash.com/photo-1544441452-326ff5a947fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcm5hdmFsfGVufDB8fDB8fHww',
    },
    {
      title: 'At the black hole',
      url: 'https://plus.unsplash.com/premium_photo-1690571200236-0f9098fc6ca9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3BhY2V8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the lighthouse',
      url: 'https://images.unsplash.com/photo-1434873740857-1bc5653afda8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG93ZXJ8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the forest',
      url: 'https://images.unsplash.com/photo-1440581572325-0bea30075d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'At the city',
      url: 'https://plus.unsplash.com/premium_photo-1672116452571-896980a801c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'At the carnaval',
      url: 'https://images.unsplash.com/photo-1544441452-326ff5a947fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcm5hdmFsfGVufDB8fDB8fHww',
    },
    {
      title: 'At the black hole',
      url: 'https://plus.unsplash.com/premium_photo-1690571200236-0f9098fc6ca9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3BhY2V8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the lighthouse',
      url: 'https://images.unsplash.com/photo-1434873740857-1bc5653afda8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG93ZXJ8ZW58MHx8MHx8fDA%3D',
    },
  ];

  getClasses(index: number): string[] {
    const classes: string[] = [];

    if (index === this.currentPage) {
      classes.push('active');
    }

    return classes;
  }

  checkPageIndex(index: number): boolean {
    return Math.abs(this.currentPage - index) < 5;
  }
}
