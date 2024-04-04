

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mission } from '../../models/mission';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpaceXService {
  private apiUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  getLaunches(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.apiUrl);
  }

  getLaunchesByYear(year: number): Observable<Mission[]> {
    const url = `${this.apiUrl}?launch_year=${year}`;
    return this.http.get<Mission[]>(url);
  }

  getLaunchDetails(flightNumber: string): Observable<Mission> {
    const url = `${this.apiUrl}/${flightNumber}`;
    console.log(url);
    return this.http.get<Mission>(url);
  }
}