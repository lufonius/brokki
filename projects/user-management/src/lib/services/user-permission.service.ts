import {Injectable} from '@angular/core';

import {UserPermission} from '@brokki/core';

import {CRUD} from './crud.service';

@Injectable({
  providedIn: 'root'
})
export abstract class UserPermissionService<
  T extends UserPermission = UserPermission
> extends CRUD<T> {}
