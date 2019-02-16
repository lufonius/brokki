import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {UserPermission} from '../../../../../core/src/lib/model/user-management/user-permission.model';
import {
  UserPermissionActions,
  UserPermissionActionTypes
} from './user-permission.actions';

export interface State extends EntityState<UserPermission> {
  // additional entities state properties
}

export const adapter: EntityAdapter<UserPermission> = createEntityAdapter<
  UserPermission
>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: UserPermissionActions
): State {
  switch (action.type) {
    case UserPermissionActionTypes.AddUserPermission: {
      return adapter.addOne(action.payload.userPermission, state);
    }

    case UserPermissionActionTypes.UpsertUserPermission: {
      return adapter.upsertOne(action.payload.userPermission, state);
    }

    case UserPermissionActionTypes.AddUserPermissions: {
      return adapter.addMany(action.payload.userPermissions, state);
    }

    case UserPermissionActionTypes.UpsertUserPermissions: {
      return adapter.upsertMany(action.payload.userPermissions, state);
    }

    case UserPermissionActionTypes.UpdateUserPermission: {
      return adapter.updateOne(action.payload.userPermission, state);
    }

    case UserPermissionActionTypes.UpdateUserPermissions: {
      return adapter.updateMany(action.payload.userPermissions, state);
    }

    case UserPermissionActionTypes.DeleteUserPermission: {
      return adapter.removeOne(action.payload.id, state);
    }

    case UserPermissionActionTypes.DeleteUserPermissions: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case UserPermissionActionTypes.LoadUserPermissions: {
      return adapter.addAll(action.payload.userPermissions, state);
    }

    case UserPermissionActionTypes.ClearUserPermissions: {
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
  selectTotal
} = adapter.getSelectors();
