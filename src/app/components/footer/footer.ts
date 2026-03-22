import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [
    RouterLink,
    DatePipe,
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  protected today: Date = new Date();
}
