import {Injectable} from '@angular/core';

import {Permission} from '@brokki/core';

import {CRUD} from './crud.service';

@Injectable({
  providedIn: 'root'
})
export abstract class PermissionService<
  T extends Permission = Permission
> extends CRUD<T> {}
