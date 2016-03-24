'use strict';
/*
 * This script analyzes the current commits of the CI.
 * It will search for blocked statements, which have been added in the commits and fail if present.
 */

var child_process = require('child_process');
var blocked_statements = [
  'ddescribe',
  'fdescribe',
  'iit',
  'fit',
  'xdescribe',
  'xit',
  'debugger;'
];

var blockedRegex = new RegExp('\\+.*(' + blocked_statements.join('|') + ').*$', 'mg');
var commit_range = process.env.TRAVIS_COMMIT_RANGE || 'HEAD~1';

var diff = child_process.execSync(`git diff --unified=0 ${commit_range} ./src ./e2e`).toString();

if (blockedRegex.test(diff)) {

  console.warn('Warning: You are using a statement in your commit, which is not allowed.\n' +
    'Blocked Statements are: ' + blocked_statements.join(', ') + '\n' +
    'Please remove them, and the CI will continue.');

  process.exit(1);

} else {
  console.log('Info: The commits have been analyzed and are valid!');
}