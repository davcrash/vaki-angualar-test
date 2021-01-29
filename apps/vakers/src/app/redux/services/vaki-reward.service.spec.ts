import { TestBed } from '@angular/core/testing';

import { VakiRewardService } from './vaki-reward.service';

describe('VakiRewardService', () => {
  let service: VakiRewardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VakiRewardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
