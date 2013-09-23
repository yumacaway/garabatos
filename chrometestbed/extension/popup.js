require(["lib/angular.min"], function(a) {
	console.log("Loading Popup");
  console.log(angular);

  angular.module("popup", []);
  angular.bootstrap(document);
});