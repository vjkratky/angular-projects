import { Component } from '@angular/core';
import { Card } from "./card/card";

@Component({
  selector: 'app-root',
  imports: [Card],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  posts = [
    {
      title: "Neat Tree",
      imageUrl: "tree.jpeg",
      userName: "@nature",
      content: "I saw this neat tree"
    },
    {
      title: "Snowy Mountain",
      imageUrl: "mountain.jpeg",
      userName: "@mountainlover",
      content: "Here is a picture of a snowy mountain"
    },
    {
      title: "Mountain Biking",
      imageUrl: "biking.jpeg",
      userName: "@biking122",
      content: "I done some biking today"
    },
    {
      title: "Mountain Biking",
      imageUrl: "biking.jpeg",
      userName: "@biking122",
      content: "I done some biking today"
    }
  ]
}
