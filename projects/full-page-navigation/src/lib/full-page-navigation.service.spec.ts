import {TestBed} from '@angular/core/testing';

import {FullPageNavigationService} from './full-page-navigation.service';

describe('FullPageNavigationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FullPageNavigationService = TestBed.get(
      FullPageNavigationService
    );
    expect(service).toBeTruthy();
  });
});
