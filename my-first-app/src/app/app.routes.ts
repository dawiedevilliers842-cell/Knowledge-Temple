import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { AboutMe } from './about-me/about-me';
import { TechnologyStack } from './technology-stack/technology-stack';
import { Quotes } from './quotes/quotes';
import { ThreePlayground } from './three-playground/three-playground';

export const routes: Routes = [
  {
    path: '',
    title: 'Home Page',
    component: Home,
  },
  {
    path: 'about',
    title: 'About',
    component: About,
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
