import { Component, OnInit } from '@angular/core';
import { Hotel } from '../model/hotel';
import { NgForm, NgModel } from '@angular/forms';
import { EnergyGovernanceService } from '../service/energy-governance';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hotel-details-form',
  templateUrl: './hotel-details-form.component.html',
  styleUrls: ['./hotel-details-form.component.css']
})
export class HotelDetailsComponent implements OnInit {

  hotel : Hotel = {
    id: null,
    hotelName: null,
    hotelCode: null,
    updated: null
  };
  
  constructor(private energyGovernanceService: EnergyGovernanceService,private router: Router) { }
  ngOnInit() { }

  onSubmit(form: NgForm) {
      this.energyGovernanceService.addAddress(this.hotel).subscribe(data => {
          this.hotel = data;
        });
      this.router.navigate(['/hotels']);
  }

}
