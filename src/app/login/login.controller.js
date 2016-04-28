(function() {
  angular.module('nd')
    .controller('LoginController', loginController);

  function loginController(
    $scope,
    $state,
    $q,
    modelFactory,
    $location,
    User,
    LoginService,
    Session
    ) {

    $scope.user = modelFactory.create('user', User);

    $scope.login  = login;
    $scope.submit = submit;

    function submit() {

      $location.path('/dashboard');

      return false;
    }

    function login() {
      var deferred, authPromise;
      if($scope.loginForm.$invalid) {
        deferred = $q.defer();

        return $q.reject();
      }
      authPromise = LoginService.authentication($scope.user);
      authPromise.then(loginSuccess, failure);
      return authPromise;
    }

    function loginSuccess (result) {
      $scope.user.accessToken = result.accessToken;
      $scope.user.refreshToken = result.refreshToken;
      $scope.user.expireDate = result.expireDate;
      $scope.user.status = result.status;
      //Create a new user session
      Session.create($scope.user);
      $state.go('dashboard');
    }

    function failure (error) {
      console.log(error);
    }
  }
})();
