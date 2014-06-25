'use strict';

/* Controllers */

// RouteProvider defaults us to PhoneListCtrl & associates phone-list.html as the view.
class ProjectListCtrl {

    public init($scope, Project): void {
        // create a "projects" property on the view, containing the query data.
        $scope.projects = Project.query();
        $scope.orderProp = 'age';
    }
}

class ProjectDetailCtrl {
    private _scope;

    public init($scope, $routeParams, Project): void {
        this._scope = $scope;

        $scope.phone = Project.get({ projectId: $routeParams.phoneId }, function (phone) {
            $scope.mainImageUrl = phone.images[0];
        });

        $scope.setImage = function(imageUrl) {
          $scope.mainImageUrl = imageUrl;
        }
    }
}

var projectListCtrl: ProjectListCtrl = new ProjectListCtrl();
var projectDetailCtrl: ProjectDetailCtrl = new ProjectDetailCtrl();

var controllers: ng.IModule = angular.module('phonecatControllers', []);
controllers.controller('ProjectListCtrl', ['$scope', 'Project', projectListCtrl.init]);
controllers.controller('ProjectDetailCtrl', ['$scope', '$routeParams', 'Project', projectDetailCtrl.init]);

