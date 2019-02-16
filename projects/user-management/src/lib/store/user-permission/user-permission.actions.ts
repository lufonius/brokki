import {Action} from '@ngrx/store';
import {Update} from '@ngrx/entity';
import {UserPermission} from '../../../../../core/src/lib/model/user-management/user-permission.model';

export enum UserPermissionActionTypes {
  LoadUserPermissions = '[UserPermission] Load UserPermissions',
  AddUserPermission = '[UserPermission] Add UserPermission',
  UpsertUserPermission = '[UserPermission] Upsert UserPermission',
  AddUserPermissions = '[UserPermission] Add UserPermissions',
  UpsertUserPermissions = '[UserPermission] Upsert UserPermissions',
  UpdateUserPermission = '[UserPermission] Update UserPermission',
  UpdateUserPermissions = '[UserPermission] Update UserPermissions',
  DeleteUserPermission = '[UserPermission] Delete UserPermission',
  DeleteUserPermissions = '[UserPermission] Delete UserPermissions',
  ClearUserPermissions = '[UserPermission] Clear UserPermissions'
}

export class LoadUserPermissions implements Action {
  readonly type = UserPermissionActionTypes.LoadUserPermissions;

  constructor(public payload: {userPermissions: UserPermission[]}) {}
}

export class AddUserPermission implements Action {
  readonly type = UserPermissionActionTypes.AddUserPermission;

  constructor(public payload: {userPermission: UserPermission}) {}
}

export class UpsertUserPermission implements Action {
  readonly type = UserPermissionActionTypes.UpsertUserPermission;

  constructor(public payload: {userPermission: UserPermission}) {}
}

export class AddUserPermissions implements Action {
  readonly type = UserPermissionActionTypes.AddUserPermissions;

  constructor(public payload: {userPermissions: UserPermission[]}) {}
}

export class UpsertUserPermissions implements Action {
  readonly type = UserPermissionActionTypes.UpsertUserPermissions;

  constructor(public payload: {userPermissions: UserPermission[]}) {}
}

export class UpdateUserPermission implements Action {
  readonly type = UserPermissionActionTypes.UpdateUserPermission;

  constructor(public payload: {userPermission: Update<UserPermission>}) {}
}

export class UpdateUserPermissions implements Action {
  readonly type = UserPermissionActionTypes.UpdateUserPermissions;

  constructor(public payload: {userPermissions: Update<UserPermission>[]}) {}
}

export class DeleteUserPermission implements Action {
  readonly type = UserPermissionActionTypes.DeleteUserPermission;

  constructor(public payload: {id: string}) {}
}

export class DeleteUserPermissions implements Action {
  readonly type = UserPermissionActionTypes.DeleteUserPermissions;

  constructor(public payload: {ids: string[]}) {}
}

export class ClearUserPermissions implements Action {
  readonly type = UserPermissionActionTypes.ClearUserPermissions;
}

export type UserPermissionActions =
  | LoadUserPermissions
  | AddUserPermission
  | UpsertUserPermission
  | AddUserPermissions
  | UpsertUserPermissions
  | UpdateUserPermission
  | UpdateUserPermissions
  | DeleteUserPermission
  | DeleteUserPermissions
  | ClearUserPermissions;
