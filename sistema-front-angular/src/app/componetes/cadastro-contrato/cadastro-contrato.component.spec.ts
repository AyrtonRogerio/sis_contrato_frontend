import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroContratoComponent } from './cadastro-contrato.component';

describe('CadastroContratoComponent', () => {
  let component: CadastroContratoComponent;
  let fixture: ComponentFixture<CadastroContratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroContratoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
