import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioLaboralComponent } from './horario-laboral.component';

describe('HorarioLaboralComponent', () => {
  let component: HorarioLaboralComponent;
  let fixture: ComponentFixture<HorarioLaboralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorarioLaboralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
