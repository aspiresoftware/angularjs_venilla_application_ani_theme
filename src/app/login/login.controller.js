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
      $scope.user.grantType = 'password';
      authPromise = LoginService.authentication($scope.user);
      authPromise.then(loginSuccess, failure);
      return authPromise;
    }

    function loginSuccess (result) {
      $scope.user = result.user;
      $scope.user.accessToken = result.auth.accessToken;
      $scope.user.refreshToken = result.auth.refreshToken;
      $scope.user.expireDate = result.auth.expireDate;
      $scope.user.rolename = result.auth.rolename;
      // $scope.user.status = result.status;
      //Create a new user session
      Session.create($scope.user);
      $state.go('dashboard');
    }

    function failure (error) {
      console.log(error);
    }
  }
})();
