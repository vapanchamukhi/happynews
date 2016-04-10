(function(){

var loginSignupService = function(){

    this.login = "false";
    this.signup = "false";

}

angular.module('myApp').service('loginSignupService',[loginSignupService])
}())