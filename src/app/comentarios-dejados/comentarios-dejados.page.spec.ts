import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComentariosDejadosPage } from './comentarios-dejados.page';

describe('ComentariosDejadosPage', () => {
  let component: ComentariosDejadosPage;
  let fixture: ComponentFixture<ComentariosDejadosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariosDejadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
