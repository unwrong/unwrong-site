'use strict';

/* App Module */


// Controllers
var aboutCtrl: AboutCtrl = new AboutCtrl();
var contactCtrl: ContactCtrl = new ContactCtrl();
var newsCtrl: NewsCtrl = new NewsCtrl();
var projectListCtrl: ProjectListCtrl = new ProjectListCtrl();
var projectDetailCtrl: ProjectDetailCtrl = new ProjectDetailCtrl();

var controllers: ng.IModule = angular.module('phonecatControllers', []);
controllers.controller('AboutCtrl', ['$scope', aboutCtrl.init]);
controllers.controller('ContactCtrl', ['$scope', contactCtrl]);
controllers.controller('NewsCtrl', ['$scope', newsCtrl.init]);
controllers.controller('ProjectListCtrl', ['$scope', 'Project', projectListCtrl.init]);
controllers.controller('ProjectDetailCtrl', ['$scope', '$sce', '$routeParams', 'Project', projectDetailCtrl.init]);

// RouteProvider
class RouteProvider {
    public init($routeProvider) {
        $routeProvider.
            when('/projects', {
                templateUrl: 'partials/project-list.html',
                controller: 'ProjectListCtrl'
            }).
            when('/projects/:phoneId', {
                templateUrl: 'partials/project-detail.html',
                controller: 'ProjectDetailCtrl'
            }).
            when('/about', {
                templateUrl: 'partials/about.html',
                controller: 'AboutCtrl'
            }).
            when('/contact', {
                templateUrl: 'partials/contact.html',
                controller: 'ContactCtrl'
            }).
            when('/news', {
                templateUrl: 'partials/news.html',
                controller: 'NewsCtrl'
            }).
            otherwise({
                redirectTo: '/projects'
            });
    }
}

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  //'phonecatAnimations',

  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices',
  'angular-carousel'
]);

var routeProvider: RouteProvider = new RouteProvider();

phonecatApp.config(['$routeProvider', routeProvider.init]);
