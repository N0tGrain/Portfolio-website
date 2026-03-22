import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-hero-image',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './hero-image.html',
  styleUrl: './hero-image.css',
})
export class HeroImage {}
