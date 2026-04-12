import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {

  private dataUrl: string = 'app/data/projects.json';

  constructor(private http: HttpClient) {}

  public getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.dataUrl);
  }

  public getProjectById(id: string): Observable<Project | undefined> {
    return new Observable(observer => {
      this.getProjects().subscribe(projects => {
        observer.next(projects.find(p => p.id === id));
        observer.complete();
      });
    });
  }

}
