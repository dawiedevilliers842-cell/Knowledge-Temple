import { Routes } from '@angular/router';
import { AboutMe } from './pages/about-me/about-me';

import { Cv } from './pages/cv/cv';
import { Home } from './pages/home/home';
import { Quotes } from './pages/quotes/quotes';
import { TechnologyStack } from './pages/technology-stack/technology-stack';
import { ThreePlayground } from './pages/three-playground/three-playground';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'about-me',
    title: 'About Me',
    component: AboutMe,
  },
  {
    path: 'cv',
    title: 'Curriculum Vitae',
    component: Cv,
  },
  {
    path: 'technology-stack',
    title: 'Technology Stack',
    component: TechnologyStack,
  },
  {
    path: 'quotes',
    title: 'Quotes',
    component: Quotes,
  },
  {
    path: 'playground',
    title: 'Three.js Playground',
    component: ThreePlayground,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
