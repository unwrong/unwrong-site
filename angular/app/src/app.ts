'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',

  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/projects', {
        templateUrl: 'partials/phone-list.html',
        controller: 'ProjectListCtrl'
      }).
        when('/projects/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'ProjectDetailCtrl'
      }).
      otherwise({
          redirectTo: '/projects'
      });
  }]);
