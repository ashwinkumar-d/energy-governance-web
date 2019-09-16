import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EnergyGovernanceService } from './energy-governance';
import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [EnergyGovernanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
