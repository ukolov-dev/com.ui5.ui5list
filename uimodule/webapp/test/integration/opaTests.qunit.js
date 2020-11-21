/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
  "use strict";

  sap.ui.require([
    "com/ui5/ui5list/test/integration/AllJourneys"
  ], function() {
    QUnit.start();
  });
});
