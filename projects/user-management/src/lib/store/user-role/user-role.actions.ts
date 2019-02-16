import {Action} from '@ngrx/store';
import {Update} from '@ngrx/entity';
import {UserRole} from '../../../../../core/src/lib/model/user-management/user-role.model';

export enum UserRoleActionTypes {
  LoadUserRoles = '[UserRole] Load UserRoles',
  AddUserRole = '[UserRole] Add UserRole',
  UpsertUserRole = '[UserRole] Upsert UserRole',
  AddUserRoles = '[UserRole] Add UserRoles',
  UpsertUserRoles = '[UserRole] Upsert UserRoles',
  UpdateUserRole = '[UserRole] Update UserRole',
  UpdateUserRoles = '[UserRole] Update UserRoles',
  DeleteUserRole = '[UserRole] Delete UserRole',
  DeleteUserRoles = '[UserRole] Delete UserRoles',
  ClearUserRoles = '[UserRole] Clear UserRoles'
}

export class LoadUserRoles implements Action {
  readonly type = UserRoleActionTypes.LoadUserRoles;

  constructor(public payload: {userRoles: UserRole[]}) {}
}

export class AddUserRole implements Action {
  readonly type = UserRoleActionTypes.AddUserRole;

  constructor(public payload: {userRole: UserRole}) {}
}

export class UpsertUserRole implements Action {
  readonly type = UserRoleActionTypes.UpsertUserRole;

  constructor(public payload: {userRole: UserRole}) {}
}

export class AddUserRoles implements Action {
  readonly type = UserRoleActionTypes.AddUserRoles;

  constructor(public payload: {userRoles: UserRole[]}) {}
}

export class UpsertUserRoles implements Action {
  readonly type = UserRoleActionTypes.UpsertUserRoles;

  constructor(public payload: {userRoles: UserRole[]}) {}
}

export class UpdateUserRole implements Action {
  readonly type = UserRoleActionTypes.UpdateUserRole;

  constructor(public payload: {userRole: Update<UserRole>}) {}
}

export class UpdateUserRoles implements Action {
  readonly type = UserRoleActionTypes.UpdateUserRoles;

  constructor(public payload: {userRoles: Update<UserRole>[]}) {}
}

export class DeleteUserRole implements Action {
  readonly type = UserRoleActionTypes.DeleteUserRole;

  constructor(public payload: {id: string}) {}
}

export class DeleteUserRoles implements Action {
  readonly type = UserRoleActionTypes.DeleteUserRoles;

  constructor(public payload: {ids: string[]}) {}
}

export class ClearUserRoles implements Action {
  readonly type = UserRoleActionTypes.ClearUserRoles;
}

export type UserRoleActions =
  | LoadUserRoles
  | AddUserRole
  | UpsertUserRole
  | AddUserRoles
  | UpsertUserRoles
  | UpdateUserRole
  | UpdateUserRoles
  | DeleteUserRole
  | DeleteUserRoles
  | ClearUserRoles;
