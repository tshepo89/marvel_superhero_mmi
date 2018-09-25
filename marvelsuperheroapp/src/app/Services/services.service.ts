import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ServicesService {

  constructor(private http: HttpClient) { }

  readonly base_url = 'http://localhost:3000'
  
  public getCharecters() {
    return this.http.get('http://localhost:3000/characters')
  }

  public getSingleCharecter(id) {
    return this.http.get(`http://localhost:3000/characters/${id}`)
  }
  
}
