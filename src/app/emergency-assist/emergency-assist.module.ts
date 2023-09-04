import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmergencyAssistPageRoutingModule } from './emergency-assist-routing.module';

import { EmergencyAssistPage } from './emergency-assist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmergencyAssistPageRoutingModule
  ],
  declarations: [EmergencyAssistPage]
})
export class EmergencyAssistPageModule {}
