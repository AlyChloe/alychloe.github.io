angular.module('portfolioApp')
  .component('work', {
    templateUrl: 'src/templates/work.html',
    controller: function() {
      var ctrl = this;
      ctrl.$onInit = function() {
        console.log('work page');
      }

    },
    controllerAs: 'workCtrl'
  });
