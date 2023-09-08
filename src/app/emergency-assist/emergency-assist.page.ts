import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emergency-assist',
  templateUrl: './emergency-assist.page.html',
  styleUrls: ['./emergency-assist.page.scss'],
})
export class EmergencyAssistPage implements OnInit {

  isModalOpen = false;
  isImageExpanded = false;

  constructor() { }

  ngOnInit() {
  }

  animateAndOpenModal() {
    // Cambia la clase de la imagen para iniciar la animación de escala
    this.isImageExpanded = true;

    // Después de un breve retraso, abre el modal
    setTimeout(() => {
      this.isModalOpen = true;
    }, 300); // 300 milisegundos para que coincida con la duración de la animación CSS
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
    this.isImageExpanded = false; // Restablece la propiedad isImageExpanded al cerrar el modal
  }
}
