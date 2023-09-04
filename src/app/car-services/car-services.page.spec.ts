import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { CarServicesPage } from './car-services.page';

describe('CarServicesPage', () => {
  let component: CarServicesPage;
  let fixture: ComponentFixture<CarServicesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CarServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
