import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  constructor(private http: HttpClient) { }
  getLocations(): Observable<any> {
    return this.http.get('https://rickandmortyapi.com/api/location');
  }
  getCharacters(): Observable<any> {
    return this.http.get('https://rickandmortyapi.com/api/character');
  }
}