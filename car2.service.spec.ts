import { TestBed } from '@angular/core/testing';

import { Car2Service } from './car2.service';

describe('Car2Service', () => {
  let service: Car2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Car2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
