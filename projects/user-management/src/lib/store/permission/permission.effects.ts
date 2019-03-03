import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, takeUntil} from 'rxjs/operators';
import {of} from 'rxjs';
import {Store} from '@ngrx/store';

import {
  AddPermission,
  AddPermissionsFailure,
  LoadPermissions,
  LoadPermissionsFailure,
  PermissionActions,
  PermissionActionTypes,
  UpdatePermission,
  UpdatePermissionFailure
} from './permission.actions';
import {State} from './permission.reducer';
import {PermissionService} from '../../services';

@Injectable()
export class PermissionEffects {
  @Effect()
  load$ = this.actions$.pipe(
    ofType(PermissionActionTypes.LoadPermissions),
    map((action: LoadPermissions) => action.payload),
    switchMap((payload: {args?: any}) => {
      return this.permissionService
        .read(...payload.args)
        .pipe(
          takeUntil(
            this.actions$.pipe(
              ofType(
                PermissionActionTypes.LoadPermissions,
                PermissionActionTypes.CancelLoadPermissions
              )
            )
          )
        );
    }),
    catchError((error) => of(new LoadPermissionsFailure({error})))
  );

  @Effect()
  updateOne$ = this.actions$.pipe(
    ofType(PermissionActionTypes.UpdatePermission),
    map((action: UpdatePermission) => action.payload),
    switchMap((payload) => {
      return this.permissionService
        .update(
          payload.permission.id,
          payload.permission.changes,
          ...payload.args
        )
        .pipe(
          takeUntil(
            this.actions$.pipe(
              ofType(
                PermissionActionTypes.UpdatePermission,
                PermissionActionTypes.CancelUpdatePermission
              )
            )
          )
        );
    }),
    catchError((error) => of(new UpdatePermissionFailure({error})))
  );

  @Effect()
  addOne$ = this.actions$.pipe(
    ofType(PermissionActionTypes.AddPermission),
    map((action: AddPermission) => action.payload),
    switchMap((payload) => {
      return this.permissionService
        .create(payload.permission)
        .pipe(
          takeUntil(
            this.actions$.pipe(
              ofType(
                PermissionActionTypes.AddPermission,
                PermissionActionTypes.CancelAddPermission
              )
            )
          )
        );
    }),
    catchError((error) => of(new AddPermissionsFailure({error})))
  );

  public constructor(
    private actions$: Actions<PermissionActions>,
    private store: Store<State>,
    private permissionService: PermissionService
  ) {}
}
