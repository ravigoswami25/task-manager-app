import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { About } from './pages/about/about';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: About },
];
