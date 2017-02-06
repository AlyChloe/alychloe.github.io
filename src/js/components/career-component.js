angular.module('portfolioApp')
  .component('career', {
    templateUrl: 'src/templates/career.html',
    controller: ['appService', '$firebaseObject', '$scope', function(appService, $firebaseObject, $scope) {
      let ctrl = this;
      let ref = appService.firebase;

      ctrl.$onInit = function() {
        console.log('Im working!');
      }

      ref.once("value", function(snapshot) {
        $scope.techSkills = snapshot.val().skills;
        $scope.$apply();
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });

    }],
    controllerAs: 'careerCtrl'
  });
