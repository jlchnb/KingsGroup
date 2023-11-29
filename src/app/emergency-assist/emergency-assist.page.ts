import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emergency-assist',
  templateUrl: './emergency-assist.page.html',
  styleUrls: ['./emergency-assist.page.scss'],
})
export class EmergencyAssistPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
