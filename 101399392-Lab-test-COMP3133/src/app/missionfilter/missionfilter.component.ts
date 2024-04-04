import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../shared/api/spacex-service.service';
import { Mission } from '../models/mission';
import { Router } from '@angular/router';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [],
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css'],
})
export class MissionfilterComponent implements OnInit {
  selectedYear: number | null = null;
  #data: Mission[] = [];
  filteredData: Mission[] = [];
  years: number[] = [];

  constructor(private spaceXService: SpaceXService, private router: Router) {}

  ngOnInit(): void {
    this.spaceXService.getLaunches().subscribe((missions: Mission[]) => {
      this.data = missions;
    });
  }

  filterLaunches(year: number | null) {
    if (year === this.selectedYear) {
      year = null;
    }

    if (!year) {
      this.selectedYear = null;
      this.spaceXService.getLaunches().subscribe((missions: Mission[]) => {
        this.data = missions;
      });
    } else {
      this.selectedYear = year;
      this.spaceXService.getLaunchesByYear(year).subscribe((missions: Mission[]) => {
        this.data = missions;
      });
    }
  }

  onSeeMoreClick(mission: Mission) {
    this.router.navigate(['missiondetails'], {
      queryParams: { id: mission.flight_number },
    });
  }

  get data(): Mission[] {
    return this.#data;
  }

  set data(value: Mission[]) {
    this.#data = value;
    this.filteredData = value;
    this.years = Array.from(
      new Set<number>(value.map((mission) => parseInt(mission.launch_year, 10)))
    );
  }
}