import { Component, OnInit } from '@angular/core';

import { ServicesService} from '../../Services/services.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private marvelhero_service: ServicesService) { }

  ngOnInit() {
  }

  getmarvel_super_hero_character(){
    this.marvelhero_service.getmarvel_super_hero_character()
    .subscribe((data:any) => {
      if(data.length)
        //this.vehicles = data;
    })
  }
}
