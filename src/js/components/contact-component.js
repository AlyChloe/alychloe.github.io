angular.module('portfolioApp')
  .component('contact', {
    templateUrl: 'src/templates/contact.html',
    controller: function() {
      var ctrl = this;
      ctrl.$onInit = function() {
        console.log('Contact Page!');
      }
    },
    controllerAs: 'contactCtrl'
  });
