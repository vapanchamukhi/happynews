(function () {
    angular.module('myApp', ['ngAnimate', 'ui.bootstrap', 'ngRoute', 'ngMessages']);

angular.module('myApp').config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'template/main.html',
                controller  : 'ModalDemoCtrl'
            })
        .otherwise({redirectTo: '/'})
});

angular.module('myApp').controller('ModalDemoCtrl', ['$scope','$uibModal','$log','loginSignupService', function ($scope, $uibModal, $log, loginSignupService) {

  $scope.animationsEnabled = true;

  $scope.openLogin = function (size) {
      loginSignupService.login = true;
      loginSignupService.signup = false;
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'template/model.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });
  };
    
    $scope.openSignup = function (size) {
      loginSignupService.login = false;
      loginSignupService.signup = true;
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'template/model.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

}]);

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('myApp').controller('ModalInstanceCtrl', ['$scope','$uibModalInstance','loginSignupService',function ($scope, $uibModalInstance, loginSignupService) {
    
    $scope.login = loginSignupService.login;
    $scope.signup = loginSignupService.signup;
    $scope.modelInstance = $uibModalInstance;
    
}])}());