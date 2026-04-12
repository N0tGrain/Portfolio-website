import { Component, Input } from '@angular/core';
import { Project } from '../../models/project.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  @Input() project!: Project;
}
