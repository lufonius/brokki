import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Role } from '../../../../../core/src/lib/model/user-management/role.model';
import { RoleActions, RoleActionTypes } from './role.actions';

export interface State extends EntityState<Role> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Role> = createEntityAdapter<Role>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: RoleActions
): State {
  switch (action.type) {
    case RoleActionTypes.AddRole: {
      return adapter.addOne(action.payload.role, state);
    }

    case RoleActionTypes.UpsertRole: {
      return adapter.upsertOne(action.payload.role, state);
    }

    case RoleActionTypes.AddRoles: {
      return adapter.addMany(action.payload.roles, state);
    }

    case RoleActionTypes.UpsertRoles: {
      return adapter.upsertMany(action.payload.roles, state);
    }

    case RoleActionTypes.UpdateRole: {
      return adapter.updateOne(action.payload.role, state);
    }

    case RoleActionTypes.UpdateRoles: {
      return adapter.updateMany(action.payload.roles, state);
    }

    case RoleActionTypes.DeleteRole: {
      return adapter.removeOne(action.payload.id, state);
    }

    case RoleActionTypes.DeleteRoles: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case RoleActionTypes.LoadRoles: {
      return adapter.addAll(action.payload.roles, state);
    }

    case RoleActionTypes.ClearRoles: {
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
