angular.module('portfolioApp')
  .component('about', {
    templateUrl: 'src/templates/about.html',
    controller: function() {
      var ctrl = this;
      ctrl.$onInit = function() {
        console.log('About Page!');
      }
    },
    controllerAs: 'aboutCtrl'
  });
