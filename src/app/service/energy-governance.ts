import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hotel } from '../model/hotel';
import { EnergyConsumption } from '../model/energy-consumption';

@Injectable()
export class EnergyGovernanceService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/energy-governance/hotels';
  }

  public findAll(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.url);
  }

  public findConsumptionByHotel(energyType: string): Observable<EnergyConsumption[]> {
    return this.http.get<EnergyConsumption[]>(this.url + "/1/"+energyType);
  }
}
