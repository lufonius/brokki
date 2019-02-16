import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { UserRoleEffects } from './user-role.effects';

describe('UserRoleEffects', () => {
  let actions$: Observable<any>;
  let effects: UserRoleEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserRoleEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(UserRoleEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
