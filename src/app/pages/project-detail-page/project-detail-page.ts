import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project-service';

@Component({
  selector: 'app-project-detail-page',
  imports: [],
  templateUrl: './project-detail-page.html',
  styleUrl: './project-detail-page.css',
})
export class ProjectDetailPage implements OnInit {
  protected project?: Project;

  constructor(private route: ActivatedRoute, private projectService: ProjectService) {}

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id')!;

    this.projectService.getProjectById(id).subscribe(project => {
      this.project = project;
    });
  }
}
