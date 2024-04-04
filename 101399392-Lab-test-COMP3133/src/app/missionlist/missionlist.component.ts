import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../shared/api/spacex-service.service';
import { Mission } from '../models/mission';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  JsonPipe,
  DatePipe,
  LowerCasePipe,
  UpperCasePipe,
} from '@angular/common';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css'],
})
export class MissionlistComponent implements OnInit {
  missions: Mission[] = [];

  filteredMissions?: Mission[];
  selectedMission?: Mission;
  years?: number[];

  constructor(private spaceXService: SpaceXService, private router: Router) {}

  ngOnInit(): void {
    this.getLaunches();
  }

  getLaunches() {
    this.spaceXService.getLaunches().subscribe((missions: Mission[]) => {
      this.missions = missions;
    });
  }

  showMissionDetails(mission: Mission) {
    this.router.navigate(['missiondetails'], { state: { mission } });
  }
}
