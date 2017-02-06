angular.module('portfolioApp', ['ui.router', 'firebase'])
  .config(["$urlRouterProvider", "$stateProvider", function($urlRouterProvider, $stateProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider.state('home', {
        url: '/',
        template: '<home></home>'
      }).state('about', {
        url: '/about',
        template: '<about></about>'
      }).state('contact', {
        url: '/contact',
        template: '<contact></contact>'
      }).state('career', {
        url: '/career',
        template: '<career></career>'
      }).state('work', {
        url: '/work',
        template: '<work></work>'
      });
  }]);
