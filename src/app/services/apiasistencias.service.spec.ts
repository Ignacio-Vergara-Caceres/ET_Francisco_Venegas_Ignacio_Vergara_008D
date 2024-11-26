import { TestBed } from '@angular/core/testing';

import { ApiasistenciasService } from './apiasistencias.service';

describe('ApiasistenciasService', () => {
  let service: ApiasistenciasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiasistenciasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
