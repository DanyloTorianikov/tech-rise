import { TestBed } from '@angular/core/testing';

import { IconsRegistrarService } from './icons-registrar.service';

describe('IconsRegistrarService', () => {
  let service: IconsRegistrarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconsRegistrarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
