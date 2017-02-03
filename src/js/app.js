angular.module('portfolioApp', ['ui.router'])
  .config(["$urlRouterProvider", "$stateProvider", function($urlRouterProvider, $stateProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider.state('home', {
        url: '/',
        template: '<home></home>'
      }).state('about', {
        url: '/about-chloe',
        template: '<about></about>'
      }).state('contact', {
        url: '/contact-chloe',
        template: '<contact></contact>'
      }).state('career', {
        url: '/career',
        template: '<career></career>'
      });
  }]);
