import { TestBed } from '@angular/core/testing';

import { AllMovieTvService } from './all-movie-tv.service';

describe('AllMovieTvService', () => {
  let service: AllMovieTvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllMovieTvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
