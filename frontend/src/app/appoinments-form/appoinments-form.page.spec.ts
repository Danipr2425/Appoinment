import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppoinmentsFormPage } from './appoinments-form.page';

describe('AppoinmentsFormPage', () => {
  let component: AppoinmentsFormPage;
  let fixture: ComponentFixture<AppoinmentsFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppoinmentsFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
