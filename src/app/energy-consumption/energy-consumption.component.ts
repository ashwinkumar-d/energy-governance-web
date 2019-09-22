import { Component, OnInit } from '@angular/core';
import { EnergyGovernanceService } from '../service/energy-governance';
import { EnergyConsumption } from '../model/energy-consumption';
import { Hotel } from '../model/hotel';
import { FormBuilder,Validators } from "@angular/forms";

@Component({
  selector: 'app-energy-consumption',
  templateUrl: './energy-consumption.component.html',
  styleUrls: ['./energy-consumption.component.css']
})
export class EnergyConsumptionComponent implements OnInit {

  energyConsumptionDetails: EnergyConsumption[];
  hotels: Hotel[];
  energyTypes: any[];
  selectedHotel:string;
  selectedEnergy:string;


  constructor(public fb: FormBuilder, private energyGovernanceService: EnergyGovernanceService) { 
  }

  ngOnInit() {
    this.energyGovernanceService.findAll().subscribe(data => {
      this.hotels = data;
    });
    this.energyTypes = ['Water', 'Electricity', 'Waste Generation'];
  }
  energyConsumptionDetailsForm = this.fb.group({
    energyTypes: ['', [Validators.required]]
  })

  get hotelSelector() {
    return this.energyConsumptionDetailsForm.get('energySelector');
  }

  onSubmit() {
    console.log("hotelname = ",this.selectedHotel);
    console.log("selectedEnergy = ", this.selectedEnergy);
    if (!this.energyConsumptionDetailsForm.valid) {
      return false;
    } else {
      this.energyGovernanceService.findConsumptionByHotel(this.selectedHotel, this.selectedEnergy).subscribe(data => {
        this.energyConsumptionDetails = data;
        console.log(this.energyConsumptionDetails);
      });
    }
  }
}
