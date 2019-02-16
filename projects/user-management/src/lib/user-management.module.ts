import {ModuleWithProviders, NgModule, Provider} from '@angular/core';

import {UserManagementStoreModule} from './store/user-management-store.module';

@NgModule({
  declarations: [],
  imports: [UserManagementStoreModule],
  exports: []
})
class RootUserManagementModule {}

@NgModule()
export class UserManagementModule {
  public static forRoot(): // TODO: set default values here
  /*
   * defaultUser: Default User attributes on user registration
   * defaultUserRoles: Default roles on user registration
   * defaultUserPermissions: Default permissions on user registration
   * defaultRole: default Role attribtues on role creation
   * defaultRolePermissions: default permissions on role creation
   * defaultPermission: default Permission attributes on permission creation
   *
   * Can return a value or observable ... maybe provide an instance of a certain class
   * which is being used as a service, like guards for a router
   *
   * make a type for the config to pass, maybe like this
   * {
   *   defaultUserProperties: {[property: string]: any} | Observable<{[property: string]: any}> | BROKDefaultUserProperties,
   *   defaultUserRoles: string | string[] | Observable<string | string[]> | BROKDefaultUserRoles
   *   etc.
   * }
   * */
  ModuleWithProviders {
    return {
      ngModule: RootUserManagementModule,
      providers: []
    };
  }
}
