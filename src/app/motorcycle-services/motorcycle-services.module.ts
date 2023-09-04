import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotorcycleServicesPageRoutingModule } from './motorcycle-services-routing.module';

import { MotorcycleServicesPage } from './motorcycle-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotorcycleServicesPageRoutingModule
  ],
  declarations: [MotorcycleServicesPage]
})
export class MotorcycleServicesPageModule {}
