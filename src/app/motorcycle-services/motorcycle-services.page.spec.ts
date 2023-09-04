import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MotorcycleServicesPage } from './motorcycle-services.page';

describe('MotorcycleServicesPage', () => {
  let component: MotorcycleServicesPage;
  let fixture: ComponentFixture<MotorcycleServicesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MotorcycleServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
