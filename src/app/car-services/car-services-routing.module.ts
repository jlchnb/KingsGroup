import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarServicesPage } from './car-services.page';

const routes: Routes = [
  {
    path: '',
    component: CarServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarServicesPageRoutingModule {}
