import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppGorjetaPage } from './app-gorjeta.page';
import { app.component.scss } from '../app.component.scss';

describe('AppGorjetaPage', () => {
  let component: AppGorjetaPage;
  let fixture: ComponentFixture<AppGorjetaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppGorjetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
