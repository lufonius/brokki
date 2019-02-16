import {User} from "./user.model";
import {Permission} from "./permission.model";

export interface Role {
  id: string;
  name: string;
  token: string;

  users?: User[];
  permissions?: Permission[];
}
