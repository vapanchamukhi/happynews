(function(){

    var loginModel = function(){
        return {
            restrict: 'E',
            templateUrl: 'template/login.html',
            scope: {
                loginModel: '=',
                signup: '=',
                login: "="
            },
            controller: function($scope){
                console.log($scope.loginModel)
                $scope.animationsEnabled = true;
                $scope.ok = function () {
                    $scope.loginModel.close();
                };

                $scope.cancel = function () {
                    $scope.loginModel.dismiss('cancel');
                };
                
                $scope.openSignupModel = function(){
                    $scope.login=false;
                    $scope.signup=true;
                }
            }
        }
        
    
    }
    angular.module('myApp').directive('loginModel', loginModel)

}());