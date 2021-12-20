import { TestBed } from '@angular/core/testing';

import { PromissoriaService } from './promissoria.service';

describe('PromissoriaService', () => {
  let service: PromissoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromissoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
