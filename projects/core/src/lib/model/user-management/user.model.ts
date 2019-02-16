import {Role} from './role.model';
import {Permission} from './permission.model';

export interface User {
  id: string;

  roles: Role[];
  explicitPermissions: Permission[];
}
