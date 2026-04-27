import { Routes } from '@angular/router';
import { AboutMe } from './about-me/about-me';
import { Home } from './home/home';
import { Quotes } from './quotes/quotes';
import { TechnologyStack } from './technology-stack/technology-stack';

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
    path: 'technology-stack',
    title: 'Technology Stack',
    component: TechnologyStack,
  },
  {
    path: 'quotes',
    title: 'Quotes',
    component: Quotes,
  },
  // {
  //   path: 'playground',
  //   title: 'Three.js Playground',
  //   component: ThreePlayground,
  // },
  {
    path: '**',
    redirectTo: '',
  },
];
