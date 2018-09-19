import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ServicesService {

  constructor(private http: HttpClient) { }

  readonly url = 'localhost:8080'
  getmarvel_super_hero_character(){
    return this.http.get(this.url)
  }
}
