'use strict';

/* Controllers */

class PhoneListCtrl {

    public init($scope, Phone):void {
        $scope.phones = Phone.query();
        $scope.orderProp = 'age';
    }
}

class PhoneDetailCtrl {
    private $scope;

    public init($scope, $routeParams, Phone): void {
        this.$scope = $scope;

        $scope.phone = Phone.get({ projectId: $routeParams.phoneId }, function (phone) {
            $scope.mainImageUrl = phone.images[0];
        });

        $scope.setImage = function(imageUrl) {
          $scope.mainImageUrl = imageUrl;
        }
    }
}

var phoneListCtrl: PhoneListCtrl = new PhoneListCtrl();
var phoneDetailCtrl: PhoneDetailCtrl = new PhoneDetailCtrl();

var phonecatControllers: ng.IModule = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone', phoneListCtrl.init]);
phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone', phoneDetailCtrl.init]);

