import {Action} from '@ngrx/store';
import {Update} from '@ngrx/entity';
import {RolePermission} from '../../../../../core/src/lib/model/user-management/role-permission.model';

export enum RolePermissionActionTypes {
  LoadRolePermissions = '[RolePermission] Load RolePermissions',
  AddRolePermission = '[RolePermission] Add RolePermission',
  UpsertRolePermission = '[RolePermission] Upsert RolePermission',
  AddRolePermissions = '[RolePermission] Add RolePermissions',
  UpsertRolePermissions = '[RolePermission] Upsert RolePermissions',
  UpdateRolePermission = '[RolePermission] Update RolePermission',
  UpdateRolePermissions = '[RolePermission] Update RolePermissions',
  DeleteRolePermission = '[RolePermission] Delete RolePermission',
  DeleteRolePermissions = '[RolePermission] Delete RolePermissions',
  ClearRolePermissions = '[RolePermission] Clear RolePermissions'
}

export class LoadRolePermissions implements Action {
  readonly type = RolePermissionActionTypes.LoadRolePermissions;

  constructor(public payload: {rolePermissions: RolePermission[]}) {}
}

export class AddRolePermission implements Action {
  readonly type = RolePermissionActionTypes.AddRolePermission;

  constructor(public payload: {rolePermission: RolePermission}) {}
}

export class UpsertRolePermission implements Action {
  readonly type = RolePermissionActionTypes.UpsertRolePermission;

  constructor(public payload: {rolePermission: RolePermission}) {}
}

export class AddRolePermissions implements Action {
  readonly type = RolePermissionActionTypes.AddRolePermissions;

  constructor(public payload: {rolePermissions: RolePermission[]}) {}
}

export class UpsertRolePermissions implements Action {
  readonly type = RolePermissionActionTypes.UpsertRolePermissions;

  constructor(public payload: {rolePermissions: RolePermission[]}) {}
}

export class UpdateRolePermission implements Action {
  readonly type = RolePermissionActionTypes.UpdateRolePermission;

  constructor(public payload: {rolePermission: Update<RolePermission>}) {}
}

export class UpdateRolePermissions implements Action {
  readonly type = RolePermissionActionTypes.UpdateRolePermissions;

  constructor(public payload: {rolePermissions: Update<RolePermission>[]}) {}
}

export class DeleteRolePermission implements Action {
  readonly type = RolePermissionActionTypes.DeleteRolePermission;

  constructor(public payload: {id: string}) {}
}

export class DeleteRolePermissions implements Action {
  readonly type = RolePermissionActionTypes.DeleteRolePermissions;

  constructor(public payload: {ids: string[]}) {}
}

export class ClearRolePermissions implements Action {
  readonly type = RolePermissionActionTypes.ClearRolePermissions;
}

export type RolePermissionActions =
  | LoadRolePermissions
  | AddRolePermission
  | UpsertRolePermission
  | AddRolePermissions
  | UpsertRolePermissions
  | UpdateRolePermission
  | UpdateRolePermissions
  | DeleteRolePermission
  | DeleteRolePermissions
  | ClearRolePermissions;
