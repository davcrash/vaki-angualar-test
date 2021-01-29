import { TestBed } from '@angular/core/testing';

import { VakiService } from './vaki.service';

describe('VakiService', () => {
  let service: VakiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VakiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
