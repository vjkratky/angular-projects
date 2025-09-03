import { Component } from '@angular/core';
import { GeneratePhotoService } from './generate-photo-service';
import { PhotoDisplay } from './photo-display/photo-display';

@Component({
  selector: 'app-root',
  imports: [PhotoDisplay],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  imageSrc: string = '';
  constructor(private generateImage: GeneratePhotoService) {}

  generateRandomImagem() {
    this.generateImage
      .getRandomImage()
      .subscribe((response) => (this.imageSrc = response));
  }
}
