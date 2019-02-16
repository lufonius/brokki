import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';

import * as fromPermission from './permission/permission.reducer';
import * as fromUser from './user/user.reducer';
import * as fromRole from './role/role.reducer';
import * as fromRolePermission from './role-permission/role-permission.reducer';
import * as fromUserPermission from './user-permission/user-permission.reducer';
import * as fromUserRole from './user-role/user-role.reducer';

export interface State {
  permission: fromPermission.State;
  user: fromUser.State;
  role: fromRole.State;
  rolePermission: fromRolePermission.State;
  userPermission: fromUserPermission.State;
  userRole: fromUserRole.State;
}

export const reducers: ActionReducerMap<State> = {
  permission: fromPermission.reducer,
  user: fromUser.reducer,
  role: fromRole.reducer,
  rolePermission: fromRolePermission.reducer,
  userPermission: fromUserPermission.reducer,
  userRole: fromUserRole.reducer
};

export const selectUserManagementState = createFeatureSelector<State>(
  'user-management'
);

export const {
  selectAll: selectAllPermission,
  selectEntities: selectEntitiesPermission,
  selectIds: selectIdsPermission,
  selectTotal: selectTotalPermission
} = fromPermission.adapter.getSelectors();

export const {
  selectAll: selectAllUser,
  selectEntities: selectEntitiesUser,
  selectIds: selectIdsUser,
  selectTotal: selectTotalUser
} = fromUser.adapter.getSelectors();

export const {
  selectAll: selectAllRole,
  selectEntities: selectEntitiesRole,
  selectIds: selectIdsRole,
  selectTotal: selectTotalRole
} = fromRole.adapter.getSelectors();

export const {
  selectAll: selectAllRolePermission,
  selectEntities: selectEntitiesRolePermission,
  selectIds: selectIdsRolePermission,
  selectTotal: selectTotalRolePermission
} = fromRolePermission.adapter.getSelectors();

export const {
  selectAll: selectAllUserPermission,
  selectEntities: selectEntitiesUserPermission,
  selectIds: selectIdsUserPermission,
  selectTotal: selectTotalUserPermission
} = fromUserPermission.adapter.getSelectors();

export const {
  selectAll: selectAllUserRole,
  selectEntities: selectEntitiesUserRole,
  selectIds: selectIdsUserRole,
  selectTotal: selectTotalUserRole
} = fromUserPermission.adapter.getSelectors();
