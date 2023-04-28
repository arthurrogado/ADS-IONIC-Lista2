import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppDepositoPage } from './app-deposito.page';

describe('AppDepositoPage', () => {
  let component: AppDepositoPage;
  let fixture: ComponentFixture<AppDepositoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppDepositoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
