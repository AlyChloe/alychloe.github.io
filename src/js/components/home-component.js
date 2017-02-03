angular.module('portfolioApp')
  .component('home', {
    templateUrl: 'src/templates/home.html',
    controller: function() {
      var ctrl = this;
      ctrl.$onInit = function() {

      }
    },
    controllerAs: 'homeCtrl'
  });
