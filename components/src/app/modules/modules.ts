import { Component } from '@angular/core';
import { Divider } from '@ui/index';
import { Accordion } from './accordion/accordion';
import { Modal } from './modal/modal';

@Component({
  selector: 'app-modules',
  imports: [Modal, Accordion, Divider],
  templateUrl: './modules.html',
  styleUrl: './modules.scss',
})
export class Modules {
  modalOpen = false;
  items: { title: string; content: string }[] = [];

  ngOnInit() {
    this.items = [
      {
        title: 'What is a dog?',
        content:
          'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.',
      },
      {
        title: 'What kinds of dogs are there?',
        content:
          'There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.',
      },
      {
        title: 'How do you acquire a dog?',
        content:
          'Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.',
      },
    ];
  }

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
