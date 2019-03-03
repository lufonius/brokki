import {Observable} from 'rxjs';

export abstract class CRUD<T> {
  public abstract create(entity: T, ...args: any[]): Observable<T>;
  public abstract createMany(entities: T[], ...args: any[]): Observable<T[]>;

  public abstract read(...args: any[]): Observable<T | T[]>;

  public abstract update(
    id: string | number,
    entity: Partial<T>,
    ...args: any[]
  ): Observable<T>;
  public abstract updateMany(
    updates: {id: string | number; entity: T}[],
    ...args: any[]
  ): Observable<T[]>;

  public abstract upsert(
    id: string | number,
    entity: Partial<T>,
    ...args: any[]
  ): Observable<T>;
  public abstract upsertMany(
    updates: {id: string | number; entity: T},
    ...args: any[]
  ): Observable<T[]>;

  public abstract delete(id: string | number, ...args: any[]): Observable<void>;
  public abstract deleteMany(
    ids: string[] | number[],
    ...args: any[]
  ): Observable<void>;
}
