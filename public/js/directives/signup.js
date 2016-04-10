(function(){

    var signupModel = function(loginSignupService){
        return {
            restrict: 'E',
            templateUrl: 'template/signup.html',
            scope: {
                signUpModel: '=',
                signup: '=',
                login: "="
            },
            controller: function($scope){
                console.log($scope.signUpModel)
                $scope.animationsEnabled = true;
                $scope.ok = function () {
                    console.log($scope.firstName);
                    console.log($scope.lastName);
                    console.log($scope.email);
                    console.log($scope.password);
                    console.log($scope.password1);
                    $scope.signUpModel.close();
                };

                $scope.cancel = function () {
                    $scope.signUpModel.dismiss('cancel');
                };
                
                $scope.openLoginModel = function(){
                    $scope.login=true;
                    $scope.signup=false;
                }
            }
        }
        
    
    }
    angular.module('myApp').directive('signupModel', ['loginSignupService', signupModel])

}());