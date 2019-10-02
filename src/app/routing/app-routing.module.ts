import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelListComponent } from '../hotel-list/hotel-list.component';
import { HomeComponent } from '../home/home.component';
import { EnergyConsumptionComponent } from '../energy-consumption/energy-consumption.component'
import { HotelDetailsComponent } from '../hotel-details-form/hotel-details-form.component';
 
const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'hotels', component: HotelListComponent },
    { path:'energy', component: EnergyConsumptionComponent },
    { path:'addHotel', component: HotelDetailsComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }