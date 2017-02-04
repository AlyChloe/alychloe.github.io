angular.module('portfolioApp')
  .component('career', {
    templateUrl: 'src/templates/career.html',
    controller: ['appService', function(appService) {
      let ctrl = this;
      let ref = appService.firebase;

      ctrl.$onInit = function() {
        console.log('Im working!');
      }

      ref.on("value", function(snapshot) {
        console.log(snapshot.val());
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });

    }],
    controllerAs: 'careerCtrl'
  });
