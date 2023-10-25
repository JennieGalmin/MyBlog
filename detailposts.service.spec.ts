import { TestBed } from '@angular/core/testing';

import { DetailpostsService } from './detailposts.service';

describe('DetailpostsService', () => {
  let service: DetailpostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailpostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
