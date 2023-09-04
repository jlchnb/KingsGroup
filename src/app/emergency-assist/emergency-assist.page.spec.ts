import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { EmergencyAssistPage } from './emergency-assist.page';

describe('EmergencyAssistPage', () => {
  let component: EmergencyAssistPage;
  let fixture: ComponentFixture<EmergencyAssistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EmergencyAssistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
