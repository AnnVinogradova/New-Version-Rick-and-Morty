import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../services/RickAndMorty.Service';
@Component({
  selector: 'app-locations',
  templateUrl: './Locations.component.html',
})
export class LocationsComponent implements OnInit {
  locations: any;
  constructor(private rickAndMortyService: RickAndMortyService) { }
  ngOnInit() {
    this.rickAndMortyService.getLocations().subscribe(data => {
      this.locations = data.results;
    });
  }
}
