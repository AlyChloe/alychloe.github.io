angular.module('portfolioApp')
  .component('career', {
    templateUrl: 'src/templates/career.html',
    controller: function() {
      var ctrl = this;
      ctrl.$onInit = function() {
        console.log('Im working!');
      }
    },
    controllerAs: 'careerCtrl'
  });
