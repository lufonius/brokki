import {Injectable} from '@angular/core';

import {RolePermission} from '@brokki/core';

import {CRUD} from './crud.service';

@Injectable({
  providedIn: 'root'
})
export abstract class RolePermissionService<
  T extends RolePermission = RolePermission
> extends CRUD<T> {}
