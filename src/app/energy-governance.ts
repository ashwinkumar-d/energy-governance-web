import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hotel } from './model/hotel';

@Injectable()
export class EnergyGovernanceService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/energy-governance/hotels';
  }

  public findAll(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.url);
  }

}
