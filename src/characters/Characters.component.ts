import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../services/RickAndMorty.Service';
@Component({
  selector: 'app-characters',
  templateUrl: './Characters.component.html',
})
export class CharactersComponent implements OnInit {
  characters: any;
  constructor(private rickAndMortyService: RickAndMortyService) { }
  ngOnInit() {
    this.rickAndMortyService.getCharacters().subscribe(data => {
      this.characters = data.results;
    });
  }
}


