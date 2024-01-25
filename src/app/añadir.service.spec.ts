import { TestBed } from '@angular/core/testing';

import { AñadirService } from './añadir.service';

describe('AñadirService', () => {
  let service: AñadirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AñadirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
