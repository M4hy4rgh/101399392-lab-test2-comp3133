import { Routes } from '@angular/router';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
import { MissionfilterComponent } from './missionfilter/missionfilter.component';
import { MissionlistComponent } from './missionlist/missionlist.component';

export const routes: Routes = [
  { path: 'missionlist', component: MissionlistComponent },
  { path: 'missiondetails', component: MissiondetailsComponent },
  { path: 'missionfilter', component: MissionfilterComponent },
  { path: "", redirectTo: "/missionlist", pathMatch: "full" },
  { path: '**', redirectTo: 'missionlist' },
];
