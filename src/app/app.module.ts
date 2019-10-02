import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EnergyGovernanceService } from './service/energy-governance';
import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HomeComponent } from './home/home.component';
import { EnergyConsumptionComponent } from './energy-consumption/energy-consumption.component';
import { HotelDetailsComponent } from './hotel-details-form/hotel-details-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    HomeComponent,
    EnergyConsumptionComponent,
    HotelDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [EnergyGovernanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
