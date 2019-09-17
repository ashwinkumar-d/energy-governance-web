import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelListComponent } from '../hotel-list/hotel-list.component';
import { HomeComponent } from '../home/home.component';
import { EnergyConsumptionComponent } from '../energy-consumption/energy-consumption.component'
 
const routes: Routes = [
  { path: '', component: HomeComponent},
    { path: 'hotels', component: HotelListComponent },
    {path:'energy', component: EnergyConsumptionComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }