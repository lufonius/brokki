import {TestBed} from '@angular/core/testing';

import {RolePermissionService} from './role-permission.service';

describe('RolePermissionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RolePermissionService = TestBed.get(RolePermissionService);
    expect(service).toBeTruthy();
  });
});
