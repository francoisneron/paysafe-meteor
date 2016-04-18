// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by paysafe-meteor.js.
import { name as packageName } from "meteor/paysafe-meteor";

// Write your tests here!
// Here is an example.
Tinytest.add('paysafe-meteor - example', function (test) {
  test.equal(packageName, "paysafe-meteor");
});
