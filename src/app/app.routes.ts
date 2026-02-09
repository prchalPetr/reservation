import { Routes } from '@angular/router';
import { NewReservationPageComponent } from './pages/new-reservation-page/new-reservation-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'new-reservation',
    component: NewReservationPageComponent
  },
];
