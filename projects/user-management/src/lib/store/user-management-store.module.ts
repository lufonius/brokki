import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import * as fromReducers from './reducers';
import {EffectsModule} from '@ngrx/effects';
import {PermissionEffects} from './permission/permission.effects';
import {RoleEffects} from './role/role.effects';
import {RolePermissionEffects} from './role-permission/role-permission.effects';
import {UserPermissionEffects} from './user-permission/user-permission.effects';
import {UserRoleEffects} from './user-role/user-role.effects';
import {UserEffects} from './user/user.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('user-management', fromReducers.reducers),
    EffectsModule.forFeature([
      PermissionEffects,
      RoleEffects,
      RolePermissionEffects,
      UserEffects,
      UserPermissionEffects,
      UserRoleEffects
    ])
  ]
})
export class UserManagementStoreModule {}
