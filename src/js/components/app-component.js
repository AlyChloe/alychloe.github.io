angular.module('portfolioApp')
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function($location) {
      var ctrl = this;
      ctrl.slideUp = false;

      ctrl.$onInit = function() {
        //console.log('APP');
      }
      ctrl.activeItem = $location.path().substr(1);
      console.log(ctrl.activeItem);

      if(ctrl.activeItem == 'work') {
        ctrl.slideUp = !ctrl.slideUp;
      }

      $('nav li').on('click', '.work', function(e) {
        console.log(e);
      });

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
