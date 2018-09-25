import { Component } from '@angular/core';

import { ServicesService} from './Services/services.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'marvelsuperheroapp';
  loadingAll: boolean = false;
  loadingSingle: boolean = false;
  data: string;
  allCharactors: any[] = [];

  singleCharactor: any = null;
  constructor(private marvelhero_service: ServicesService) { }

  getCharacters(): void {
    this.loadingAll = true;
    this.allCharactors = [];

    this.marvelhero_service.getCharecters().subscribe(
      data => {
        this.allCharactors = data['characters'];
        this.loadingAll = false;
      },
      err => {
        console.log(err);
      }
    )
  }


  getSingleCharecter(id) {
    this.loadingSingle = true;
    this.singleCharactor = null;
    
    this.marvelhero_service.getSingleCharecter(id).subscribe(
      data => {
        this.singleCharactor = data['characters'];
        this.loadingSingle = false;
      },
      err=> {
        console.log(err);
      }
    )
  }
}
