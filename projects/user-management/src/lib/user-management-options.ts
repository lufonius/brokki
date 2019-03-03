import {Type} from '@angular/core';

import {PermissionService} from './services';

export interface UserManagementOptions {
  crud: {
    permission: Type<PermissionService>;
    /*roleCrudService: Type<RoleService>;
    rolePermissionCrudService: Type<RolePermissionService>;
    userCrudService: Type<UserService>;
    userPermissionCrudService: Type<UserPermissionService>;
    userRoleCrudService: Type<UserRoleService>;*/
  };

  defaultServices: {};
}
