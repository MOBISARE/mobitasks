import { Component } from '@angular/core';
import { PageNotFoundService } from '../domain/page-not-found/pageNotFoundService';
import { createPageNotFoundServiceService } from '../infrastructure/service/pageNotFoundFactory';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css',
  providers: [
    {
      provide: PageNotFoundService,
      useFactory: createPageNotFoundServiceService,
    },
  ],
})
export class PageNotFoundComponent {}
