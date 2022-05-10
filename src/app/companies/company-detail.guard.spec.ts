import { TestBed } from '@angular/core/testing';

import { CompanyDetailGuard } from './company-detail.guard';

describe('CompanyDetailGuard', () => {
  let guard: CompanyDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CompanyDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
