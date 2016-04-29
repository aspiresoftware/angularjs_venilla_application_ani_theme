(function() {
  angular.module('nd')
    .controller('EditUserController', EditUserController);

  function EditUserController(
    $scope,
    $state,
    $q,
    $timeout,
    $stateParams,
    EditUser,
    modelFactory,
    ShowUserService
    ) {
      console.log($stateParams.id);

      $scope.editUserModel = modelFactory.create('editUserModel', EditUser);

      //Initially retrieve the users list
      $scope.getUsers = getUsers();
      $scope.editUser = editUser;

      function getUsers() {
        ShowUserService.getUsers().then(getUsersSuccess,failure);
      }

      function getUsersSuccess(data) {
        $scope.editUserModel = getSpecificUser(data.users, $stateParams.id);
        console.log(data + 'success');
      }

      function failure(error) {
        console.log(JSON.stringify(error) + 'failure');
      }

      function getSpecificUser(users, id) {
        var specificUser;
        specificUser = users.filter(function (user) {
          return String(user.id) === id;
        });
        if (specificUser.length) {
          return specificUser[0];
        }
      }

      function editUser() {
        var params = {};
        params.id = $scope.editUserModel.id;
        ShowUserService.updateUser(params, $scope.editUserModel).then(editUserSuccess, failure);
        function editUserSuccess(data) {
          debugger;
        }
      }
  }
})();
