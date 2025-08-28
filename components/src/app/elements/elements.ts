import { Component } from '@angular/core';
import { Divider } from '@ui/divider/divider';
import { Placeholder } from './placeholder/placeholder';
import { Segment } from './segment/segment';

@Component({
  selector: 'app-elements',
  imports: [Placeholder, Divider, Segment],
  templateUrl: './elements.html',
  styleUrl: './elements.scss',
})
export class Elements {}
