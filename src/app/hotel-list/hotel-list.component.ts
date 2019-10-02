import { Component, OnInit } from '@angular/core';
import { Hotel } from '../model/hotel';
import { EnergyGovernanceService } from '../service/energy-governance'

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  hotels: Hotel[];
  showEntries: boolean = false;

  constructor(private energyGovernanceService: EnergyGovernanceService) { 
  }

  ngOnInit() {
    this.energyGovernanceService.findAll().subscribe(data => {
      if(data.length !=0){
        this.hotels = data;
        this.showEntries = true;
      }else{
        this.showEntries = false;
      }

    });
  }
}
