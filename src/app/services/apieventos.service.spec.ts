import { TestBed } from '@angular/core/testing';

import { ApieventosService } from './apieventos.service';

describe('ApieventosService', () => {
  let service: ApieventosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApieventosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
