import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { Hotel } from '../model/hotel';
import { EnergyTypeDetails } from '../model/energy-type-details';

@Injectable()
export class EnergyGovernanceService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/energy-governance/hotels';
  }

  public findAll(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.url);
  }

  public findConsumptionByHotel(hotelId:string, energyType: string): Observable<EnergyTypeDetails[]> {
    return this.http.get<EnergyTypeDetails[]>(this.url+"/"+hotelId+"/"+energyType);
  }

  public addAddress(hotel: Hotel) : Observable<Hotel> {
    return this.http.post<Hotel>(this.url+"/",hotel);
  }

  public addEnergyDetails(hotelId: string, energyType: string, energyTypeObject: EnergyTypeDetails) : Observable<string> {
    return this.http.post<string>(this.url+"/"+hotelId+"/"+energyType,energyTypeObject);
  }
}
