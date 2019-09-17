import { Component, OnInit } from '@angular/core';
import { EnergyGovernanceService } from '../service/energy-governance';
import { EnergyConsumption } from '../model/energy-consumption';
import { Hotel } from '../model/hotel';

@Component({
  selector: 'app-energy-consumption',
  templateUrl: './energy-consumption.component.html',
  styleUrls: ['./energy-consumption.component.css']
})
export class EnergyConsumptionComponent implements OnInit {

  energyConsumptionDetails: EnergyConsumption[];

  constructor(private energyGovernanceService: EnergyGovernanceService) { 

  }
  hotels: Hotel[];
  ngOnInit() {
    this.energyGovernanceService.findAll().subscribe(data => {
      this.hotels = data;
    });
  }

  getConsumptionDetails(energyType: string) {
    this.energyGovernanceService.findConsumptionByHotel(energyType).subscribe(data => {
      this.energyConsumptionDetails = data;
    });
  }
}
