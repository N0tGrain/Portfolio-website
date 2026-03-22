import { Component } from '@angular/core';
import {HeroText} from './hero-text/hero-text';
import {HeroImage} from './hero-image/hero-image';

@Component({
  selector: 'app-home',
  imports: [
    HeroText,
    HeroImage
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
}
