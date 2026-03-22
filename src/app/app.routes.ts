import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {About} from './pages/about/about';
import {Projects} from './pages/projects/projects';
import {Contact} from './pages/contact/contact';

export const routes: Routes = [
  {
    path: 'about',
    component: About,
  },
  {
    path: 'projects',
    component: Projects,
  },
  // Possibly add a project information page?
  {
    path: 'contact',
    component: Contact,
  },
  {
    path: '**',
    component: Home,
  },
];
