import {Action} from '@ngrx/store';
import {Update} from '@ngrx/entity';
import {Role} from '../../../../../core/src/lib/model/user-management/role.model';

// TODO: Add User, add Permission
export enum RoleActionTypes {
  LoadRoles = '[Role] Load Roles',
  AddRole = '[Role] Add Role',
  UpsertRole = '[Role] Upsert Role',
  AddRoles = '[Role] Add Roles',
  UpsertRoles = '[Role] Upsert Roles',
  UpdateRole = '[Role] Update Role',
  UpdateRoles = '[Role] Update Roles',
  DeleteRole = '[Role] Delete Role',
  DeleteRoles = '[Role] Delete Roles',
  ClearRoles = '[Role] Clear Roles'
}

export class LoadRoles implements Action {
  readonly type = RoleActionTypes.LoadRoles;

  constructor(public payload: {roles: Role[]}) {}
}

export class AddRole implements Action {
  readonly type = RoleActionTypes.AddRole;

  constructor(public payload: {role: Role}) {}
}

export class UpsertRole implements Action {
  readonly type = RoleActionTypes.UpsertRole;

  constructor(public payload: {role: Role}) {}
}

export class AddRoles implements Action {
  readonly type = RoleActionTypes.AddRoles;

  constructor(public payload: {roles: Role[]}) {}
}

export class UpsertRoles implements Action {
  readonly type = RoleActionTypes.UpsertRoles;

  constructor(public payload: {roles: Role[]}) {}
}

export class UpdateRole implements Action {
  readonly type = RoleActionTypes.UpdateRole;

  constructor(public payload: {role: Update<Role>}) {}
}

export class UpdateRoles implements Action {
  readonly type = RoleActionTypes.UpdateRoles;

  constructor(public payload: {roles: Update<Role>[]}) {}
}

export class DeleteRole implements Action {
  readonly type = RoleActionTypes.DeleteRole;

  constructor(public payload: {id: string}) {}
}

export class DeleteRoles implements Action {
  readonly type = RoleActionTypes.DeleteRoles;

  constructor(public payload: {ids: string[]}) {}
}

export class ClearRoles implements Action {
  readonly type = RoleActionTypes.ClearRoles;
}

export type RoleActions =
  | LoadRoles
  | AddRole
  | UpsertRole
  | AddRoles
  | UpsertRoles
  | UpdateRole
  | UpdateRoles
  | DeleteRole
  | DeleteRoles
  | ClearRoles;
