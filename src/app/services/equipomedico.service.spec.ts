import { TestBed } from '@angular/core/testing';

import { EquipomedicoService } from './equipomedico.service';

describe('EquipomedicoService', () => {
  let service: EquipomedicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipomedicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
