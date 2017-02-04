angular.module('portfolioApp')
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function() {
      var ctrl = this;
      ctrl.$onInit = function() {
        console.log('APP');
      }

      ctrl.active = false;
      ctrl.isActive = function() {
        ctrl.active = true;
      }

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
