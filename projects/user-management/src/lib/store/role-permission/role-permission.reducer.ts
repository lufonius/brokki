import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { RolePermission } from '../../../../../core/src/lib/model/user-management/role-permission.model';
import { RolePermissionActions, RolePermissionActionTypes } from './role-permission.actions';

export interface State extends EntityState<RolePermission> {
  // additional entities state properties
}

export const adapter: EntityAdapter<RolePermission> = createEntityAdapter<RolePermission>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: RolePermissionActions
): State {
  switch (action.type) {
    case RolePermissionActionTypes.AddRolePermission: {
      return adapter.addOne(action.payload.rolePermission, state);
    }

    case RolePermissionActionTypes.UpsertRolePermission: {
      return adapter.upsertOne(action.payload.rolePermission, state);
    }

    case RolePermissionActionTypes.AddRolePermissions: {
      return adapter.addMany(action.payload.rolePermissions, state);
    }

    case RolePermissionActionTypes.UpsertRolePermissions: {
      return adapter.upsertMany(action.payload.rolePermissions, state);
    }

    case RolePermissionActionTypes.UpdateRolePermission: {
      return adapter.updateOne(action.payload.rolePermission, state);
    }

    case RolePermissionActionTypes.UpdateRolePermissions: {
      return adapter.updateMany(action.payload.rolePermissions, state);
    }

    case RolePermissionActionTypes.DeleteRolePermission: {
      return adapter.removeOne(action.payload.id, state);
    }

    case RolePermissionActionTypes.DeleteRolePermissions: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case RolePermissionActionTypes.LoadRolePermissions: {
      return adapter.addAll(action.payload.rolePermissions, state);
    }

    case RolePermissionActionTypes.ClearRolePermissions: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
