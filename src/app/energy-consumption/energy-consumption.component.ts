import { Component, OnInit } from '@angular/core';
import { EnergyGovernanceService } from '../service/energy-governance';
import { EnergyTypeDetails } from '../model/energy-type-details';
import { Hotel } from '../model/hotel';

@Component({
  selector: 'app-energy-consumption',
  templateUrl: './energy-consumption.component.html',
  styleUrls: ['./energy-consumption.component.css']
})
export class EnergyConsumptionComponent implements OnInit {

  energyTypeDetails: EnergyTypeDetails[];
  hotels: Hotel[];
  energyTypes: any[];
  selectedHotel: any = {};
  selectedEnergyType: string = '';
  postErrorMessage: string='Please choose any option';
  postError:boolean =  false;
  showNoEntries:boolean = false;


  constructor(private energyGovernanceService: EnergyGovernanceService) { 
  }

  ngOnInit() {
    this.energyGovernanceService.findAll().subscribe(data => {
      this.hotels = data;
    });
    this.energyTypes = ['Water', 'Electricity', 'Waste'];
  }

  addProduct() {
    if(Object.keys(this.selectedHotel).length != 0 && this.selectedEnergyType.length != 0) {
      this.energyGovernanceService.findConsumptionByHotel(this.selectedHotel.id, this.selectedEnergyType.toLowerCase()).subscribe(data => {
        if(data.length>0){
          this.energyTypeDetails = data;
          this.showNoEntries = false;
        }else {
          this.showNoEntries = true;
        }
      });
    }else {
      this.postError = true;
    }
  }
}
