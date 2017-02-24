angular.module('portfolioApp')
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function($location) {
      var ctrl = this;
      ctrl.slideUp = false;

      ctrl.$onInit = function() {
        ctrl.setView(ctrl.activeItem);
      }
      ctrl.activeItem = $location.path().substr(1);

      ctrl.setView = function(view) {
        if(view === 'work') {
          ctrl.slideUp = true;
        } else {
          ctrl.slideUp = false;
        }
      }

      ctrl.nav = [
        {page:'work', icon:'fa-briefcase'},
        {page:'about', icon:'fa-hand-peace-o'},
        {page:'career', icon:'fa-trophy'},
        {page:'contact', icon:'fa-envelope'}
      ];
      ctrl.social = [
        {media: 'twitter', url: 'https://twitter.com/achloecollier'},
        {media: 'instagram', url: 'https://www.instagram.com/achloecollier/'},
        {media: 'github-alt', url: 'https://github.com/AlyChloe'}
      ];
    },
    bindings: {
      onViewChange: '&'
    },
    controllerAs: 'appCtrl'
  });
