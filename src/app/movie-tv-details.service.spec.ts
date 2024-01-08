import { TestBed } from '@angular/core/testing';

import { MovieTvDetailsService } from './movie-tv-details.service';

describe('MovieTvDetailsService', () => {
  let service: MovieTvDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieTvDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
