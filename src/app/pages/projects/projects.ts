import { Component } from '@angular/core';
import { ProjectList } from '../../components/project-list/project-list';
import { HeroText } from './hero-text/hero-text';

@Component({
  selector: 'app-projects',
  imports: [ProjectList, HeroText],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {}
