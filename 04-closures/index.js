function foo() {
  'use strict';

  var bar;
  quux = 'global';

  function zip() {
    var quux;
    bar = true;
  }

  return zip;
}
