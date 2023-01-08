// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl:    'https://delivery-server.azurewebsites.net/api/Food/all',
  createUrl: 'https://delivery-server.azurewebsites.net/api/Food/',

  register: 'https://delivery-server.azurewebsites.net/Account/register',
  login:    'https://delivery-server.azurewebsites.net/Account/login',
  logout:   'https://delivery-server.azurewebsites.net/Account/logout',

  increase:  'https://delivery-server.azurewebsites.net/api/Food/Increase',
  decrease:  'https://delivery-server.azurewebsites.net/api/Food/Decrease',
  category1: 'https://delivery-server.azurewebsites.net/api/Food/category-1',
  category2: 'https://delivery-server.azurewebsites.net/api/Food/category-2',
  category3: 'https://delivery-server.azurewebsites.net/api/Food/category-3',
  category4: 'https://delivery-server.azurewebsites.net/api/Food/category-4',
  category5: 'https://delivery-server.azurewebsites.net/api/Food/category-5'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
