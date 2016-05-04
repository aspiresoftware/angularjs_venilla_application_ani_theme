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
      $scope.growlNotifications = {};
      $scope.maxSize = 5;
      $scope.totalItems = 3;
      $scope.currentPage = 1;
      $scope.itemsPerPage = 3;

      //Initially retrieve the users list
      $scope.getUsers = getUsers($scope.currentPage);

      //Function Declaration
      $scope.deactivateUser = deactivateUser;
      $scope.pageChanged    = pageChanged;

      function pageChanged() {
        console.log('pagechanged' + $scope.currentPage);
        getUsers($scope.currentPage);
      }

      function getUsers(currentPage) {
        ShowUserService.getUsers(currentPage).then(getUsersSuccess,failure);
      }

      function getUsersSuccess(data) {
		//TODO:Solve data promise issue:after handling 419 response, getting empty data
        try {
            if(data.$promise) {
              data.$promise.then(function(data) {
                debugger;
              },function(error) {
                debugger;
              })
            }
            $scope.usersList    = data.users;
            $scope.totalItems   = data.pages * data.users.length;
            $scope.currentPage  = data.currentPage;
            $scope.itemsPerPage = data.users.length;
            console.log(data + 'success');
        } catch(e) {
          debugger;
        }
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
          $scope.growlNotifications[i] = ALERT_MESSAGE.deactivatedUserSuccessfully + data.firstname;
          $timeout(function(){
            delete $scope.growlNotifications[i];
          }, 2000);
        }
      }
  }
})();
