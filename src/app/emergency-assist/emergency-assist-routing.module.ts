import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmergencyAssistPage } from './emergency-assist.page';

const routes: Routes = [
  {
    path: '',
    component: EmergencyAssistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmergencyAssistPageRoutingModule {}
