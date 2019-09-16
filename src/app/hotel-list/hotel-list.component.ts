import { Component, OnInit } from '@angular/core';
import { Hotel } from '../model/hotel';
import { EnergyGovernanceService } from '../energy-governance'

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  hotels: Hotel[];

  constructor(private energyGovernanceService: EnergyGovernanceService) { }

  ngOnInit() {
    this.energyGovernanceService.findAll().subscribe(data => {
      this.hotels = data;
    });
  }
}
