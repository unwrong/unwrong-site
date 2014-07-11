class ProjectDetailCtrl {
    private _scope;

    public init($scope, $sce, $routeParams, Project): void {
        this._scope = $scope;

        $scope.project = Project.get({ projectId: $routeParams.phoneId }, function (project) {
            $scope.mainImageUrl = project.images[0];
        });

        $scope.setImage = function (imageUrl) {
            $scope.mainImageUrl = imageUrl;
        };

        $scope.parseHTML = function (value) {
            return $sce.trustAsHtml(value);
        };

        // Carousel
        $scope.slideIndex = 0;
        $scope.prev = function () {
            $scope.slideIndex--;
        }
        $scope.next = function () {
            $scope.slideIndex++;
        }
        $scope.swipe = true;
        $scope.toggleSwipe = function () {
            $scope.swipe = !$scope.swipe;
        }
    }
} 