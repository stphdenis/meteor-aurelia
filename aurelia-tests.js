// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by aurelia.js.
import { name as packageName } from "meteor/aurelia";

// Write your tests here!
// Here is an example.
Tinytest.add('aurelia - example', function (test) {
  test.equal(packageName, "aurelia");
});
