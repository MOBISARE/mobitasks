import { Component } from '@angular/core';
import { HomeService } from '../domain/home/homeService';
import { createHomeService } from '../infrastructure/service/homeServiceFactory';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [
    {
      provide: HomeService,
      useFactory: createHomeService,
    },
  ],
})
export class HomeComponent {
  constructor(private readonly homeService: HomeService) {}

  sayWelcome(): void {
    this.homeService.execute().then((data) => console.log(data));
  }
}
