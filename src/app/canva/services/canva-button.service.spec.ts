import { TestBed } from '@angular/core/testing';

import { CanvaButtonService } from './canva-button.service';

describe('CanvaButtonService', () => {
  let service: CanvaButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanvaButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
