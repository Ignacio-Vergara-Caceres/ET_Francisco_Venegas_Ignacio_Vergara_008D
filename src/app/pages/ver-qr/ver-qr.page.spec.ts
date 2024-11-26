import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerQrPage } from './ver-qr.page';

describe('VerQrPage', () => {
  let component: VerQrPage;
  let fixture: ComponentFixture<VerQrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
