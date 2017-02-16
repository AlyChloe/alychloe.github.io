angular.module('portfolioApp')
  .component('work', {
    templateUrl: 'src/templates/work.html',
    controller: ["appService", '$firebaseObject', '$scope', function(appService, $firebaseObject, $scope) {
      var ctrl = this;
      let ref = appService.firebase;

      ref.once("value", function(snapshot) {
        console.log($scope.work = snapshot.val());
        $scope.work = snapshot.val().work;
        $scope.$apply();
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });

    }],
    bindings: {
      onViewChange: '<'
    },
    controllerAs: 'workCtrl'
  });
