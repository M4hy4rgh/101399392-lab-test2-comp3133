import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Mission } from '../models/mission';
import { SpaceXService } from '../shared/api/spacex-service.service';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [],
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css'],
})
export class MissiondetailsComponent implements OnInit {
  @Input() mission?: Mission;

  ngOnInit(): void {}

  constructor(
    private router: Router,
    private _location: Location,
    private spaceXService: SpaceXService
  ) {
    const currentnav = this.router.getCurrentNavigation();
    const navigationState = currentnav?.extras.state;

    if (navigationState && navigationState['mission']) {
      this.mission = navigationState['mission'];
      return;
    }

    const id = currentnav?.extractedUrl.queryParams['id'];
    if (id) {
      this.spaceXService.getLaunchDetails(id).subscribe((res) => {
        this.mission = res;
      });
    }
  }

  backAction() {
    this._location.back();
  }
}
