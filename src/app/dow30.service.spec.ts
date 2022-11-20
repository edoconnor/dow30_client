import { TestBed } from '@angular/core/testing';

import { Dow30Service } from './dow30.service';

describe('Dow30Service', () => {
  let service: Dow30Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dow30Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
