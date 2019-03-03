import {Injectable} from '@angular/core';

import {UserRole} from '@brokki/core';

import {CRUD} from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService<T extends UserRole = UserRole> extends CRUD<T> {}
