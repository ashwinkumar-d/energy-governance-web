import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EnergyGovernanceService } from '../service/energy-governance';
import { Hotel } from '../model/hotel';
import { EnergyTypeDetails } from '../model/energy-type-details';
import { Router } from '@angular/router';

@Component({
  selector: 'app-energy-details',
  templateUrl: './energy-details.component.html',
  styleUrls: ['./energy-details.component.css']
})
export class EnergyDetailsComponent implements OnInit {

  hotels: Hotel[];
  energyTypes: any[];
  selectedhotel: any = {};
  selectedEnergyType: string = '';
  postErrorMessage: string='Please choose any option';
  postError:boolean =  false;
  hotel : Hotel = {
    id: null,
    hotelName: null,
    hotelCode: null,
    updated: null
  };
  energyTypeDetail: EnergyTypeDetails = {
    id : null,
    quantity: null,
    updated: null
  }

  constructor(private energyGovernanceService: EnergyGovernanceService,private router: Router) { }

  ngOnInit() {
    this.energyGovernanceService.findAll().subscribe(data => {
      this.hotels = data;
    });
    this.energyTypes = ['Water', 'Electricity', 'Waste'];
  }

  onSubmit(form: NgForm) {
    if(this.energyTypeDetail.quantity && this.selectedEnergyType.length != 0 && this.selectedhotel.length != 0) {
      this.postError = false;
      this.energyGovernanceService.addEnergyDetails(this.selectedhotel.id, this.selectedEnergyType.toLowerCase(), this.energyTypeDetail).subscribe(data => {
      });
      this.router.navigate(['/energy']);
    } else {
      this.postError = true;
    }
}
}
