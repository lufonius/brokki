import {Injectable} from '@angular/core';

import {Role} from '@brokki/core';

import {CRUD} from './crud.service';

@Injectable({
  providedIn: 'root'
})
export abstract class RoleService<T extends Role = Role> extends CRUD<T> {}
