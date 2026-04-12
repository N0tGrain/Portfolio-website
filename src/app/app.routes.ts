import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {About} from './pages/about/about';
import {Projects} from './pages/projects/projects';
import {Contact} from './pages/contact/contact';
import { ProjectDetailPage } from './pages/project-detail-page/project-detail-page';

export const routes: Routes = [
  {
    path: 'about',
    component: About,
  },
  {
    path: 'projects',
    component: Projects,
  },
  {
    path: 'projects/:id',
    component: ProjectDetailPage,
  },
  {
    path: 'contact',
    component: Contact,
  },
  {
    path: '**',
    component: Home,
  },
];
