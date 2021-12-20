import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromissoriaComponent } from './promissoria.component';

describe('PromissoriaComponent', () => {
  let component: PromissoriaComponent;
  let fixture: ComponentFixture<PromissoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromissoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromissoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
