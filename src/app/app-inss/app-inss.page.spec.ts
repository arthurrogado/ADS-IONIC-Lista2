import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppInssPage } from './app-inss.page';

describe('AppInssPage', () => {
  let component: AppInssPage;
  let fixture: ComponentFixture<AppInssPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppInssPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
