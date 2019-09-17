import { TestBed, inject } from '@angular/core/testing';

import { EnergyGovernanceService } from './energy-governance';

describe('EnergyServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnergyGovernanceService]
    });
  });

  it('should be created', inject([EnergyGovernanceService], (service: EnergyGovernanceService) => {
    expect(service).toBeTruthy();
  }));
});
