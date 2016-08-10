var components = [
    'toastr',
];
var map = {};
var packages = {
    '.': {
        defaultExtension: 'js'
    }
};
var barrels = [
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/forms',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@types/core-js',
    'rxjs',
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
System.config({ map: map, packages: packages });
