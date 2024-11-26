import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModElPage } from './mod-el.page';

describe('ModElPage', () => {
  let component: ModElPage;
  let fixture: ComponentFixture<ModElPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModElPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
