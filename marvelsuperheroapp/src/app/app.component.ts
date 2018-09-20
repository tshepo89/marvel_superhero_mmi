import { Component } from '@angular/core';

import { ServicesService} from './Services/services.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marvelsuperheroapp';
  loading: boolean = false;
  data: string;

  constructor(private marvelhero_service: ServicesService) { }

  getmarvel_super_hero_character(): void {
    this.loading = true;
    
    this.marvelhero_service.getmarvel_super_hero_character().subscribe(
      data => {
        this.data = JSON.stringify(data);
        console.log(data);
      },
      err => {
        console.log(err);
      }
    )

  }
}
