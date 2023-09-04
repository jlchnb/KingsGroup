import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotorcycleServicesPage } from './motorcycle-services.page';

const routes: Routes = [
  {
    path: '',
    component: MotorcycleServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotorcycleServicesPageRoutingModule {}
