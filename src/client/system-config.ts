const barrels: string[] = [
  'app',
  'app/shared',
  'app/my-demosearch',
  'app/my-main',
  'app/my-navbar',
  /** @cli-barrel */
];

function createPackageConfig(barrelList: string[]): any {
  return barrelList.reduce((barrelConfig: any, barrelName: string) => {
    barrelConfig[barrelName] = {
      format: 'register',
      defaultExtension: 'js',
      main: 'index'
    };
    return barrelConfig;
  }, {});
}


// Add your custom SystemJS configuration here.
export const config: any = {
  packages: Object.assign({
      angularfire2: {
      defaultExtension: 'js',
      main: 'angularfire2'
    }
  }, createPackageConfig(barrels)),
 map: {
  'moment': 'vendor/moment/moment.js',
  'firebase' : ' vendor/firebase/lib/firebase-web.js',
  'angularfire2' : 'vendor/angularfire2'
 }
};
