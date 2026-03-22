import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-hero-text',
  imports: [
    RouterLink
  ],
  templateUrl: './hero-text.html',
  styleUrl: './hero-text.css',
})
export class HeroText {
  private firstname: String = 'Kaylee';
  private lastname: String = 'Hoogwerf';

  protected firstNameLetters: String[] = this.firstname.split('');
  protected lastNameLetters: String[] = this.lastname.split('');
}
