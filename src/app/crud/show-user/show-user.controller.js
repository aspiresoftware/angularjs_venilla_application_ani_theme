(function() {
  angular.module('nd')
    .controller('ShowUserController', ShowUserController);

  function ShowUserController(
    $scope,
    $state,
    $q,
    modelFactory,
    $location,
    ShowUserService
    ) {
      //Variable Declaration
      $scope.usersList = [];

      //Initially retrieve the users list
      $scope.getUsers = getUsers();

      //Function Declaration
      $scope.deactivateUser = deactivateUser;

      function getUsers() {
        ShowUserService.getUsers().then(getUsersSuccess,failure);
      }

      function getUsersSuccess(data) {
        $scope.usersList = data.users;
        console.log(data + 'success');
      }

      function failure(error) {
        console.log(error + 'failure');
      }

      function deactivateUser(user) {
        ShowUserService.deleteUser(user)
        .then(deactivateUserSuccess, failure);
        function deactivateUserSuccess(data) {
          debugger;
        }
      }
  }
})();
