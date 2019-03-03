// ts-ignore
import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { <%= classify(name) %> } from '<%= featurePath(group, flat, "models", dasherize(name)) %><%= dasherize(name) %>.model';

export enum <%= classify(name) %>ActionTypes {
  Clear<%= classify(name) %>s = '[<%= classify(name) %>] Clear <%= classify(name) %>s',

  Load<%= classify(name) %>s = '[<%= classify(name) %>] Load <%= classify(name) %>s',
  CancelLoad<%= classify(name) %>s = '[<%= classify(name) %>] Cancel Load <%= classify(name) %>s',
  Load<%= classify(name) %>sSuccess = '[<%= classify(name) %>] Load <%= classify(name) %>s Success',
  Load<%= classify(name) %>sFailure = '[<%= classify(name) %>] Load <%= classify(name) %>s Failure',

  Add<%= classify(name) %> = '[<%= classify(name) %>] Add <%= classify(name) %>',
  CancelAdd<%= classify(name) %> = '[<%= classify(name) %>] Cancel Add <%= classify(name) %>',
  Add<%= classify(name) %>Success = '[<%= classify(name) %>] Add <%= classify(name) %> Success',
  Add<%= classify(name) %>Failure = '[<%= classify(name) %>] Add <%= classify(name) %> Failure',

  Add<%= classify(name) %>s = '[<%= classify(name) %>] Add <%= classify(name) %>s',
  CancelAdd<%= classify(name) %>s = '[<%= classify(name) %>] Cancel Add <%= classify(name) %>s',
  Add<%= classify(name) %>sSuccess = '[<%= classify(name) %>] Add <%= classify(name) %>s Success',
  Add<%= classify(name) %>sFailure = '[<%= classify(name) %>] Add <%= classify(name) %>s Failure',

  Update<%= classify(name) %> = '[<%= classify(name) %>] Update <%= classify(name) %>',
  CancelUpdate<%= classify(name) %> = '[<%= classify(name) %>] Cancel Update <%= classify(name) %>',
  Update<%= classify(name) %>Success = '[<%= classify(name) %>] Update <%= classify(name) %> Success',
  Update<%= classify(name) %>Failure = '[<%= classify(name) %>] Update <%= classify(name) %> Failure',

  Update<%= classify(name) %>s = '[<%= classify(name) %>] Update <%= classify(name) %>s',
  CancelUpdate<%= classify(name) %>s = '[<%= classify(name) %>] Cancel Update <%= classify(name) %>s',
  Update<%= classify(name) %>sSuccess = '[<%= classify(name) %>] Update <%= classify(name) %>s Success',
  Update<%= classify(name) %>sFailure = '[<%= classify(name) %>] Update <%= classify(name) %>s Failure',

  Upsert<%= classify(name) %> = '[<%= classify(name) %>] Upsert <%= classify(name) %>',
  CancelUpsert<%= classify(name) %> = '[<%= classify(name) %>] Cancel Upsert <%= classify(name) %>',
  Upsert<%= classify(name) %>Success = '[<%= classify(name) %>] Upsert <%= classify(name) %> Success',
  Upsert<%= classify(name) %>Failure = '[<%= classify(name) %>] Upsert <%= classify(name) %> Failure',

  Upsert<%= classify(name) %>s = '[<%= classify(name) %>] Upsert <%= classify(name) %>s',
  CancelUpsert<%= classify(name) %>s = '[<%= classify(name) %>] Cancel Upsert <%= classify(name) %>s',
  Upsert<%= classify(name) %>sSuccess = '[<%= classify(name) %>] Upsert <%= classify(name) %>s Success',
  Upsert<%= classify(name) %>sFailure = '[<%= classify(name) %>] Upsert <%= classify(name) %>s Failure',

  Delete<%= classify(name) %> = '[<%= classify(name) %>] Delete <%= classify(name) %>',
  CancelDelete<%= classify(name) %> = '[<%= classify(name) %>] Cancel Delete <%= classify(name) %>',
  Delete<%= classify(name) %>Success = '[<%= classify(name) %>] Delete <%= classify(name) %> Success',
  Delete<%= classify(name) %>Failure = '[<%= classify(name) %>] Delete <%= classify(name) %> Failure',

  Delete<%= classify(name) %>s = '[<%= classify(name) %>] Delete <%= classify(name) %>s',
  CancelDelete<%= classify(name) %>s = '[<%= classify(name) %>] Cancel Delete <%= classify(name) %>s',
  Delete<%= classify(name) %>sSuccess = '[<%= classify(name) %>] Delete <%= classify(name) %>s Success',
  Delete<%= classify(name) %>sFailure = '[<%= classify(name) %>] Delete <%= classify(name) %>s Failure'
}

// Load many
export class Load<%= classify(name) %>s implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Load<%= classify(name) %>s;

  constructor(public payload?: {args: any[]}) {}
}

export class CancelLoad<%= classify(name) %>s implements Action {
  readonly type = <%= classify(name) %>ActionTypes.CancelLoad<%= classify(name) %>s;
}

export class Load<%= classify(name) %>sSuccess implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Load<%= classify(name) %>sSuccess;

  constructor(public payload: {<%= classify(name) %>s: <%= classify(name) %>[]}) {}
}

export class Load<%= classify(name) %>sFailure implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Load<%= classify(name) %>sFailure;

  constructor(public payload: {error: any}) {}
}

// Add one
export class Add<%= classify(name) %> implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Add<%= classify(name) %>;

  constructor(public payload: {<%= classify(name) %>: <%= classify(name) %>; args?: any[]}) {}
}

export class CancelAdd<%= classify(name) %> implements Action {
  readonly type = <%= classify(name) %>ActionTypes.CancelAdd<%= classify(name) %>;
}

export class Add<%= classify(name) %>Success implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Add<%= classify(name) %>Success;

  constructor(public payload: {<%= classify(name) %>: <%= classify(name) %>}) {}
}

export class Add<%= classify(name) %>Failure implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Add<%= classify(name) %>Failure;

  constructor(public payload: {error: any}) {}
}

// Add many
export class Add<%= classify(name) %>s implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Add<%= classify(name) %>s;

  constructor(public payload: {<%= classify(name) %>s: <%= classify(name) %>[]; args?: any[]}) {}
}

export class CancelAdd<%= classify(name) %>s implements Action {
  readonly type = <%= classify(name) %>ActionTypes.CancelAdd<%= classify(name) %>s;
}

export class Add<%= classify(name) %>sSuccess implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Add<%= classify(name) %>sSuccess;

  constructor(public payload: {<%= classify(name) %>s: <%= classify(name) %>[]}) {}
}

export class Add<%= classify(name) %>sFailure implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Add<%= classify(name) %>sFailure;

  constructor(public payload: {error: any}) {}
}

// Update one
export class Update<%= classify(name) %> implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Update<%= classify(name) %>;

  constructor(
    public payload: {
      <%= classify(name) %>: Update<<%= classify(name) %>>;
      args?: any[];
    }
  ) {}
}

export class Update<%= classify(name) %>Success implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Update<%= classify(name) %>Success;

  constructor(public payload: {<%= classify(name) %>: Update<<%= classify(name) %>>}) {}
}

export class CancelUpdate<%= classify(name) %> implements Action {
  readonly type = <%= classify(name) %>ActionTypes.CancelUpdate<%= classify(name) %>;
}

export class Update<%= classify(name) %>Failure implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Update<%= classify(name) %>Failure;

  constructor(public payload: {error: any}) {}
}

// Update many

export class Update<%= classify(name) %>s implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Update<%= classify(name) %>s;

  constructor(
    public payload: {
      <%= classify(name) %>: Update<<%= classify(name) %>>;
      args?: any[];
    }
  ) {}
}

export class CancelUpdate<%= classify(name) %>s implements Action {
  readonly type = <%= classify(name) %>ActionTypes.CancelUpdate<%= classify(name) %>s;
}

export class Update<%= classify(name) %>sSuccess implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Update<%= classify(name) %>sSuccess;

  constructor(public payload: {<%= classify(name) %>: Update<<%= classify(name) %>>[]}) {}
}

export class Update<%= classify(name) %>sFailure implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Update<%= classify(name) %>sFailure;

  constructor(public payload: {error: any}) {}
}

//Upsert one
export class Upsert<%= classify(name) %> implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Upsert<%= classify(name) %>;

  constructor(public payload: {<%= classify(name) %>: <%= classify(name) %>; args?: any[]}) {}
}

export class CancelUpsert<%= classify(name) %> implements Action {
  readonly type = <%= classify(name) %>ActionTypes.CancelUpsert<%= classify(name) %>;
}

export class Upsert<%= classify(name) %>Success implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Upsert<%= classify(name) %>Success;

  constructor(public payload: {<%= classify(name) %>: <%= classify(name) %>}) {}
}

export class Upsert<%= classify(name) %>Failure implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Upsert<%= classify(name) %>Failure;

  constructor(public payload: {error: any}) {}
}

// Upsert many
export class Upsert<%= classify(name) %>s implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Upsert<%= classify(name) %>s;

  constructor(public payload: {<%= classify(name) %>s: <%= classify(name) %>[]; args?: any[]}) {}
}

export class CancelUpsert<%= classify(name) %>s implements Action {
  readonly type = <%= classify(name) %>ActionTypes.CancelUpsert<%= classify(name) %>s;
}

export class Upsert<%= classify(name) %>sSuccess implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Upsert<%= classify(name) %>sSuccess;

  constructor(public payload: {<%= classify(name) %>s: <%= classify(name) %>[]}) {}
}

export class Upsert<%= classify(name) %>sFailure implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Upsert<%= classify(name) %>sFailure;

  constructor(public payload: {error: any}) {}
}

// Delete one
export class Delete<%= classify(name) %> implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Delete<%= classify(name) %>;

  constructor(public payload: {id: string; args?: any[]}) {}
}

export class CancelDelete<%= classify(name) %> implements Action {
  readonly type = <%= classify(name) %>ActionTypes.CancelDelete<%= classify(name) %>;
}

export class Delete<%= classify(name) %>Success implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Delete<%= classify(name) %>Success;

  constructor(public payload: {id: string}) {}
}

export class Delete<%= classify(name) %>Failure implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Delete<%= classify(name) %>Failure;

  constructor(public payload: {error: any}) {}
}

// Delete many
export class Delete<%= classify(name) %>s implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Delete<%= classify(name) %>s;

  constructor(public payload: {ids: string[]; args?: any[]}) {}
}

export class CancelDelete<%= classify(name) %>s implements Action {
  readonly type = <%= classify(name) %>ActionTypes.CancelDelete<%= classify(name) %>s;
}

export class Delete<%= classify(name) %>sSuccess implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Delete<%= classify(name) %>sSuccess;

  constructor(public payload: {ids: string[]}) {}
}

export class Delete<%= classify(name) %>sFailure implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Delete<%= classify(name) %>sFailure;

  constructor(public payload: {error: any}) {}
}

export class Clear<%= classify(name) %>s implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Clear<%= classify(name) %>s;
}

export type <%= classify(name) %>Actions =
  | Load<%= classify(name) %>s
  | CancelLoad<%= classify(name) %>s
  | Load<%= classify(name) %>sSuccess
  | Load<%= classify(name) %>sFailure
  | Add<%= classify(name) %>
  | CancelAdd<%= classify(name) %>
  | Add<%= classify(name) %>Success
  | Add<%= classify(name) %>Failure
  | Upsert<%= classify(name) %>
  | CancelUpsert<%= classify(name) %>
  | Upsert<%= classify(name) %>Success
  | Upsert<%= classify(name) %>Failure
  | Add<%= classify(name) %>s
  | CancelAdd<%= classify(name) %>s
  | Add<%= classify(name) %>sSuccess
  | Add<%= classify(name) %>sFailure
  | Upsert<%= classify(name) %>s
  | CancelUpsert<%= classify(name) %>s
  | Upsert<%= classify(name) %>sSuccess
  | Upsert<%= classify(name) %>sFailure
  | Update<%= classify(name) %>
  | CancelUpdate<%= classify(name) %>
  | Update<%= classify(name) %>Success
  | Update<%= classify(name) %>Failure
  | Update<%= classify(name) %>s
  | CancelUpdate<%= classify(name) %>s
  | Update<%= classify(name) %>sSuccess
  | Update<%= classify(name) %>sFailure
  | Delete<%= classify(name) %>
  | CancelDelete<%= classify(name) %>
  | Delete<%= classify(name) %>Success
  | Delete<%= classify(name) %>Failure
  | Delete<%= classify(name) %>s
  | CancelDelete<%= classify(name) %>s
  | Delete<%= classify(name) %>sSuccess
  | Delete<%= classify(name) %>sFailure
  | Clear<%= classify(name) %>s;

