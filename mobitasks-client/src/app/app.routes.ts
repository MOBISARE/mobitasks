import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'hello-component', component: HelloComponent },
  { path: 'home-component', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];
