(function() {
  angular.module('nd')
    .controller('ShowUserController', ShowUserController);

  function ShowUserController(
    $scope,
    $state,
    $q,
    $timeout,
    $location,
    modelFactory,
    ALERT_MESSAGE,
    ShowUserService
    ) {
      //Variable Declaration
      $scope.usersList = [];
      $scope.growlNotifications= {};

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
        console.log(JSON.stringify(error) + 'failure');
      }

      function deactivateUser(user, index) {
        var userid = {};
        var i;
        userid.id = user.id;
        ShowUserService.deleteUser(userid)
        .then(deactivateUserSuccess, failure);
        function deactivateUserSuccess(data) {
          $scope.usersList[index] = data;
           i += index;
          $scope.growlNotifications[i] = ALERT_MESSAGE.deactivatedUserSuccessfully + data.firstName;
          $timeout(function(){
            delete $scope.growlNotifications[i];
          }, 2000);
        }
      }
  }
})();
