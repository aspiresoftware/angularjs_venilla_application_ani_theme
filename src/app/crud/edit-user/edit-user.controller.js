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
      $scope.getUsers = getUser();

      //function Declaration
      $scope.editUser   = editUser;
      $scope.closeAlert = closeAlert;

      //Variable Declaration
      $scope.alerts = [];

      function getUser() {
        var params = {};
        params.id = $stateParams.id;
        ShowUserService.getUser(params).then(getUserSuccess,failure);
      }

      function getUserSuccess(data) {
        $scope.editUserModel.firstname = data.firstname;
        $scope.editUserModel.lastname = data.lastname;
        $scope.editUserModel.isActiavte = data.isActiavte;
        console.log(data + 'success');
      }

      function failure(error) {
        console.log(JSON.stringify(error) + 'failure');
      }


      function editUser() {
        var params = {};
        params.id = $stateParams.id;
        ShowUserService.updateUser(params, $scope.editUserModel).then(editUserSuccess, failure);
        function editUserSuccess(data) {
          $scope.alerts.push(
             { type: 'success',
              msg: 'User ' + data.firstname + ' Updated succcessfully'
            }
          );
        $scope.editUserModel.firstname = data.firstname;
        $scope.editUserModel.lastname = data.lastname;
        $scope.editUserModel.isActiavte = data.isActiavte;
        }
      }


      function closeAlert(index) {
        $scope.alerts.splice(index, 1);
      }
  }
})();
