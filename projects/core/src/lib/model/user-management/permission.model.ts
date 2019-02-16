import {Role} from './role.model';
import {User} from './user.model';

export interface Permission {
  id: string;
  name: string;
  token: string;

  roles?: Role[];
  users?: User[];
}
