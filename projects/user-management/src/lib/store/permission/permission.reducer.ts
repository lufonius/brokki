import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Permission } from '../../../../../core/src/lib/model/user-management/permission.model';
import { PermissionActions, PermissionActionTypes } from './permission.actions';

export interface State extends EntityState<Permission> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Permission> = createEntityAdapter<Permission>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: PermissionActions
): State {
  switch (action.type) {
    case PermissionActionTypes.AddPermission: {
      return adapter.addOne(action.payload.permission, state);
    }

    case PermissionActionTypes.UpsertPermission: {
      return adapter.upsertOne(action.payload.permission, state);
    }

    case PermissionActionTypes.AddPermissions: {
      return adapter.addMany(action.payload.permissions, state);
    }

    case PermissionActionTypes.UpsertPermissions: {
      return adapter.upsertMany(action.payload.permissions, state);
    }

    case PermissionActionTypes.UpdatePermission: {
      return adapter.updateOne(action.payload.permission, state);
    }

    case PermissionActionTypes.UpdatePermissions: {
      return adapter.updateMany(action.payload.permissions, state);
    }

    case PermissionActionTypes.DeletePermission: {
      return adapter.removeOne(action.payload.id, state);
    }

    case PermissionActionTypes.DeletePermissions: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case PermissionActionTypes.LoadPermissions: {
      return adapter.addAll(action.payload.permissions, state);
    }

    case PermissionActionTypes.ClearPermissions: {
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
