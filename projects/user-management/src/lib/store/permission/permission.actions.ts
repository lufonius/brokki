import {Action} from '@ngrx/store';
import {Update} from '@ngrx/entity';
import {Permission} from '@brokki/core';

// TODO: Add Role to Permission, Add User to Permission
export enum PermissionActionTypes {
  ClearPermissions = '[Permission] Clear Permissions',

  LoadPermissions = '[Permission] Load Permissions',
  CancelLoadPermissions = '[Permission] Cancel Load Permissions',
  LoadPermissionsSuccess = '[Permission] Load Permissions Success',
  LoadPermissionsFailure = '[Permission] Load Permissions Failure',

  AddPermission = '[Permission] Add Permission',
  CancelAddPermission = '[Permission] Cancel Add Permission',
  AddPermissionSuccess = '[Permission] Add Permission Success',
  AddPermissionFailure = '[Permission] Add Permission Failure',

  AddPermissions = '[Permission] Add Permissions',
  CancelAddPermissions = '[Permission] Cancel Add Permissions',
  AddPermissionsSuccess = '[Permission] Add Permissions Success',
  AddPermissionsFailure = '[Permission] Add Permissions Failure',

  UpdatePermission = '[Permission] Update Permission',
  CancelUpdatePermission = '[Permission] Cancel Update Permission',
  UpdatePermissionSuccess = '[Permission] Update Permission Success',
  UpdatePermissionFailure = '[Permission] Update Permission Failure',

  UpdatePermissions = '[Permission] Update Permissions',
  CancelUpdatePermissions = '[Permission] Cancel Update Permissions',
  UpdatePermissionsSuccess = '[Permission] Update Permissions Success',
  UpdatePermissionsFailure = '[Permission] Update Permissions Failure',

  UpsertPermission = '[Permission] Upsert Permission',
  CancelUpsertPermission = '[Permission] Cancel Upsert Permission',
  UpsertPermissionSuccess = '[Permission] Upsert Permission Success',
  UpsertPermissionFailure = '[Permission] Upsert Permission Failure',

  UpsertPermissions = '[Permission] Upsert Permissions',
  CancelUpsertPermissions = '[Permission] Cancel Upsert Permissions',
  UpsertPermissionsSuccess = '[Permission] Upsert Permissions Success',
  UpsertPermissionsFailure = '[Permission] Upsert Permissions Failure',

  DeletePermission = '[Permission] Delete Permission',
  CancelDeletePermission = '[Permission] Cancel Delete Permission',
  DeletePermissionSuccess = '[Permission] Delete Permission Success',
  DeletePermissionFailure = '[Permission] Delete Permission Failure',

  DeletePermissions = '[Permission] Delete Permissions',
  CancelDeletePermissions = '[Permission] Cancel Delete Permissions',
  DeletePermissionsSuccess = '[Permission] Delete Permissions Success',
  DeletePermissionsFailure = '[Permission] Delete Permissions Failure'
}

// Load many
export class LoadPermissions implements Action {
  readonly type = PermissionActionTypes.LoadPermissions;

  constructor(public payload?: {args: any[]}) {}
}

export class CancelLoadPermissions implements Action {
  readonly type = PermissionActionTypes.CancelLoadPermissions;
}

export class LoadPermissionsSuccess implements Action {
  readonly type = PermissionActionTypes.LoadPermissionsSuccess;

  constructor(public payload: {permissions: Permission[]}) {}
}

export class LoadPermissionsFailure implements Action {
  readonly type = PermissionActionTypes.LoadPermissionsFailure;

  constructor(public payload: {error: any}) {}
}

// Add one
export class AddPermission implements Action {
  readonly type = PermissionActionTypes.AddPermission;

  constructor(public payload: {permission: Permission; args?: any[]}) {}
}

export class CancelAddPermission implements Action {
  readonly type = PermissionActionTypes.CancelAddPermission;
}

export class AddPermissionSuccess implements Action {
  readonly type = PermissionActionTypes.AddPermissionSuccess;

  constructor(public payload: {permission: Permission}) {}
}

export class AddPermissionFailure implements Action {
  readonly type = PermissionActionTypes.AddPermissionFailure;

  constructor(public payload: {error: any}) {}
}

// Add many
export class AddPermissions implements Action {
  readonly type = PermissionActionTypes.AddPermissions;

  constructor(public payload: {permissions: Permission[]; args?: any[]}) {}
}

export class CancelAddPermissions implements Action {
  readonly type = PermissionActionTypes.CancelAddPermissions;
}

export class AddPermissionsSuccess implements Action {
  readonly type = PermissionActionTypes.AddPermissionsSuccess;

  constructor(public payload: {permissions: Permission[]}) {}
}

export class AddPermissionsFailure implements Action {
  readonly type = PermissionActionTypes.AddPermissionsFailure;

  constructor(public payload: {error: any}) {}
}

// Update one
export class UpdatePermission implements Action {
  readonly type = PermissionActionTypes.UpdatePermission;

  constructor(
    public payload: {
      permission: Update<Permission>;
      args?: any[];
    }
  ) {}
}

export class UpdatePermissionSuccess implements Action {
  readonly type = PermissionActionTypes.UpdatePermissionSuccess;

  constructor(public payload: {permission: Update<Permission>}) {}
}

export class CancelUpdatePermission implements Action {
  readonly type = PermissionActionTypes.CancelUpdatePermission;
}

export class UpdatePermissionFailure implements Action {
  readonly type = PermissionActionTypes.UpdatePermissionFailure;

  constructor(public payload: {error: any}) {}
}

// Update many

export class UpdatePermissions implements Action {
  readonly type = PermissionActionTypes.UpdatePermissions;

  constructor(
    public payload: {
      permission: Update<Permission>[];
      args?: any[];
    }
  ) {}
}

export class CancelUpdatePermissions implements Action {
  readonly type = PermissionActionTypes.CancelUpdatePermissions;
}

export class UpdatePermissionsSuccess implements Action {
  readonly type = PermissionActionTypes.UpdatePermissionsSuccess;

  constructor(public payload: {permission: Update<Permission>[]}) {}
}

export class UpdatePermissionsFailure implements Action {
  readonly type = PermissionActionTypes.UpdatePermissionsFailure;

  constructor(public payload: {error: any}) {}
}

// Upsert one
export class UpsertPermission implements Action {
  readonly type = PermissionActionTypes.UpsertPermission;

  constructor(public payload: {permission: Permission; args?: any[]}) {}
}

export class CancelUpsertPermission implements Action {
  readonly type = PermissionActionTypes.CancelUpsertPermission;
}

export class UpsertPermissionSuccess implements Action {
  readonly type = PermissionActionTypes.UpsertPermissionSuccess;

  constructor(public payload: {permission: Permission}) {}
}

export class UpsertPermissionFailure implements Action {
  readonly type = PermissionActionTypes.UpsertPermissionFailure;

  constructor(public payload: {error: any}) {}
}

// Upsert many
export class UpsertPermissions implements Action {
  readonly type = PermissionActionTypes.UpsertPermissions;

  constructor(public payload: {permissions: Permission[]; args?: any[]}) {}
}

export class CancelUpsertPermissions implements Action {
  readonly type = PermissionActionTypes.CancelUpsertPermissions;
}

export class UpsertPermissionsSuccess implements Action {
  readonly type = PermissionActionTypes.UpsertPermissionsSuccess;

  constructor(public payload: {permissions: Permission[]}) {}
}

export class UpsertPermissionsFailure implements Action {
  readonly type = PermissionActionTypes.UpsertPermissionsFailure;

  constructor(public payload: {error: any}) {}
}

// Delete one
export class DeletePermission implements Action {
  readonly type = PermissionActionTypes.DeletePermission;

  constructor(public payload: {id: string; args?: any[]}) {}
}

export class CancelDeletePermission implements Action {
  readonly type = PermissionActionTypes.CancelDeletePermission;
}

export class DeletePermissionSuccess implements Action {
  readonly type = PermissionActionTypes.DeletePermissionSuccess;

  constructor(public payload: {id: string}) {}
}

export class DeletePermissionFailure implements Action {
  readonly type = PermissionActionTypes.DeletePermissionFailure;

  constructor(public payload: {error: any}) {}
}

// Delete many
export class DeletePermissions implements Action {
  readonly type = PermissionActionTypes.DeletePermissions;

  constructor(public payload: {ids: string[]; args?: any[]}) {}
}

export class CancelDeletePermissions implements Action {
  readonly type = PermissionActionTypes.CancelDeletePermissions;
}

export class DeletePermissionsSuccess implements Action {
  readonly type = PermissionActionTypes.DeletePermissionsSuccess;

  constructor(public payload: {ids: string[]}) {}
}

export class DeletePermissionsFailure implements Action {
  readonly type = PermissionActionTypes.DeletePermissionsFailure;

  constructor(public payload: {error: any}) {}
}

export class ClearPermissions implements Action {
  readonly type = PermissionActionTypes.ClearPermissions;
}

export type PermissionActions =
  | LoadPermissions
  | CancelLoadPermissions
  | LoadPermissionsSuccess
  | LoadPermissionsFailure
  | AddPermission
  | CancelAddPermission
  | AddPermissionSuccess
  | AddPermissionFailure
  | UpsertPermission
  | CancelUpsertPermission
  | UpsertPermissionSuccess
  | UpsertPermissionFailure
  | AddPermissions
  | CancelAddPermissions
  | AddPermissionsSuccess
  | AddPermissionsFailure
  | UpsertPermissions
  | CancelUpsertPermissions
  | UpsertPermissionsSuccess
  | UpsertPermissionsFailure
  | UpdatePermission
  | CancelUpdatePermission
  | UpdatePermissionSuccess
  | UpdatePermissionFailure
  | UpdatePermissions
  | CancelUpdatePermissions
  | UpdatePermissionsSuccess
  | UpdatePermissionsFailure
  | DeletePermission
  | CancelDeletePermission
  | DeletePermissionSuccess
  | DeletePermissionFailure
  | DeletePermissions
  | CancelDeletePermissions
  | DeletePermissionsSuccess
  | DeletePermissionsFailure
  | ClearPermissions;
