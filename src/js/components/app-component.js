angular.module('portfolioApp')
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function($location) {
      var ctrl = this;
      ctrl.$onInit = function() {
        console.log('APP');
      }
      // ctrl.states = {};
      ctrl.activeItem = $location.path().substr(1);
      console.log($location.path().substr(1));

      ctrl.nav = [
        {page:'work', icon:'fa-briefcase'},
        {page:'about', icon:'fa-hand-peace-o'},
        {page:'career', icon:'fa-trophy'},
        {page:'contact', icon:'fa-envelope'}
      ];
      ctrl.social = ['twitter', 'instagram', 'github-alt'];
    },
    controllerAs: 'appCtrl'
  });
