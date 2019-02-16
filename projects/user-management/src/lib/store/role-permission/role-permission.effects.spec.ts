import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RolePermissionEffects } from './role-permission.effects';

describe('RolePermissionEffects', () => {
  let actions$: Observable<any>;
  let effects: RolePermissionEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RolePermissionEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(RolePermissionEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
