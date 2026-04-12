import { Component } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project-service';
import { ProjectCard } from '../project-card/project-card';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-project-list',
  imports: [ProjectCard, AsyncPipe],
  templateUrl: './project-list.html',
  styleUrl: './project-list.css',
})
export class ProjectList {
  protected projects$!: Observable<Project[]>;

  constructor(private projectService: ProjectService) {
    this.projects$ = this.projectService.getProjects();
  }
}
