// User Configuration
var components = [
    'toastr',
];
/** Map relative paths to URLs. */
var map = {};
/** User packages configuration. */
var packages = {
    // Set the default extension for the root package, because otherwise the demo-app can't
    // be built within the production mode. Due to missing file extensions.
    '.': {
        defaultExtension: 'js'
    }
};
// Everything underneath this line is managed by the CLI
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    // '@angular/http',
    '@angular/forms',
    // '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // '@angular2-material/core',
    '@types/core-js',
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.
    'demo-app',
    'button-toggle',
    'gestures',
    'live-announcer',
    'portal',
    'overlay'
].concat(components);
var _cliSystemConfig = {};
barrels.forEach(function (barrelName) {
    _cliSystemConfig[barrelName] = { main: 'index' };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        '@angular2-material': 'vendor/@angular2-material',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js'
    },
    packages: _cliSystemConfig
});
var materialPkgs = [
    'core',
];
materialPkgs.forEach(function (pkg) {
    packages[("@angular2-material/" + pkg)] = { main: pkg + ".js" };
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=system-config.js.map