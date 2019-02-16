import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Permission } from '../../../../../core/src/lib/model/user-management/permission.model';

// TODO: Add Role to Permission, Add User to Permission
export enum PermissionActionTypes {
  LoadPermissions = '[Permission] Load Permissions',
  AddPermission = '[Permission] Add Permission',
  UpsertPermission = '[Permission] Upsert Permission',
  AddPermissions = '[Permission] Add Permissions',
  UpsertPermissions = '[Permission] Upsert Permissions',
  UpdatePermission = '[Permission] Update Permission',
  UpdatePermissions = '[Permission] Update Permissions',
  DeletePermission = '[Permission] Delete Permission',
  DeletePermissions = '[Permission] Delete Permissions',
  ClearPermissions = '[Permission] Clear Permissions'
}

export class LoadPermissions implements Action {
  readonly type = PermissionActionTypes.LoadPermissions;

  constructor(public payload: { permissions: Permission[] }) {}
}

export class AddPermission implements Action {
  readonly type = PermissionActionTypes.AddPermission;

  constructor(public payload: { permission: Permission }) {}
}

export class UpsertPermission implements Action {
  readonly type = PermissionActionTypes.UpsertPermission;

  constructor(public payload: { permission: Permission }) {}
}

export class AddPermissions implements Action {
  readonly type = PermissionActionTypes.AddPermissions;

  constructor(public payload: { permissions: Permission[] }) {}
}

export class UpsertPermissions implements Action {
  readonly type = PermissionActionTypes.UpsertPermissions;

  constructor(public payload: { permissions: Permission[] }) {}
}

export class UpdatePermission implements Action {
  readonly type = PermissionActionTypes.UpdatePermission;

  constructor(public payload: { permission: Update<Permission> }) {}
}

export class UpdatePermissions implements Action {
  readonly type = PermissionActionTypes.UpdatePermissions;

  constructor(public payload: { permissions: Update<Permission>[] }) {}
}

export class DeletePermission implements Action {
  readonly type = PermissionActionTypes.DeletePermission;

  constructor(public payload: { id: string }) {}
}

export class DeletePermissions implements Action {
  readonly type = PermissionActionTypes.DeletePermissions;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearPermissions implements Action {
  readonly type = PermissionActionTypes.ClearPermissions;
}

export type PermissionActions =
 LoadPermissions
 | AddPermission
 | UpsertPermission
 | AddPermissions
 | UpsertPermissions
 | UpdatePermission
 | UpdatePermissions
 | DeletePermission
 | DeletePermissions
 | ClearPermissions;
