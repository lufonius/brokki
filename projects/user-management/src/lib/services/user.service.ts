import {Injectable} from '@angular/core';

import {User} from '@brokki/core';

import {CRUD} from './crud.service';

@Injectable({
  providedIn: 'root'
})
export abstract class UserService<T extends User = User> extends CRUD<T> {}
