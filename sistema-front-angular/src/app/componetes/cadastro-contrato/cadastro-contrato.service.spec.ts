import { TestBed } from '@angular/core/testing';

import { CadastroContratoService } from './cadastro-contrato.service';

describe('CadastroContratoService', () => {
  let service: CadastroContratoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroContratoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
