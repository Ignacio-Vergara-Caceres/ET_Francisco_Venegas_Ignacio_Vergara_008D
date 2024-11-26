import { TestBed } from '@angular/core/testing';

import { ApieventoService } from './apievento.service';

describe('ApieventoService', () => {
  let service: ApieventoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApieventoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
