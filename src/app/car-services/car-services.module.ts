import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarServicesPageRoutingModule } from './car-services-routing.module';

import { CarServicesPage } from './car-services.page';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarServicesPageRoutingModule
  ],
  declarations: [CarServicesPage]
})
export class CarServicesPageModule {}
