import {TestBed, inject} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {Observable} from 'rxjs';

import {UserPermissionEffects} from './user-permission.effects';

describe('UserPermissionEffects', () => {
  let actions$: Observable<any>;
  let effects: UserPermissionEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserPermissionEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get(UserPermissionEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
