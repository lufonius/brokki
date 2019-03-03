import {ModuleWithProviders, NgModule} from '@angular/core';

import {UserManagementStoreModule} from './store/user-management-store.module';
import {UserManagementOptions} from './user-management-options';
import {PermissionService} from './services';

@NgModule({
  declarations: [],
  imports: [UserManagementStoreModule],
  exports: []
})
class RootUserManagementModule {}

@NgModule()
export class UserManagementModule {
  public static forRoot(options: UserManagementOptions): ModuleWithProviders {
    return {
      ngModule: RootUserManagementModule,
      providers: [
        {
          provide: PermissionService,
          useClass: options.crud.permission
        }
        /*{
          provide: RoleService,
          useClass: options.crud.roleCrudService
        },
        {
          provide: RolePermissionService,
          useClass: options.crud.rolePermissionCrudService
        },
        {
          provide: UserService,
          useClass: options.crud.userCrudService
        },
        {
          provide: UserPermissionService,
          useClass: options.crud.userPermissionCrudService
        },
        {
          provide: UserRoleService,
          useClass: options.crud.userRoleCrudService
        }*/
      ]
    };
  }
}
