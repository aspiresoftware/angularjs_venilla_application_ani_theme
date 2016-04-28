(function() {
  angular.module('nd')
    .factory('ShowUserService', ShowUserService);

  function ShowUserService (
    REST_URL,
    DelegatorService,
    urlTemplate,
    CachedRequestHandler
    ) {

    var showUserService, urls;

    urls = {
      getUsersUrl: urlTemplate(REST_URL.getUsers, {}, {type: 'get'}),
      updateUserUrl: urlTemplate(REST_URL.updateUser, {}, {type: 'put'}),
      deleteUserUrl: urlTemplate(REST_URL.deleteUser, {}, {type: 'delete'})
    };

    showUserService = angular.extend(
      {},
      CachedRequestHandler,
      {
        modelName: 'showUser'
      },
      {
        getUsers: getUsers,
        updateUser: updateUser,
        deleteUser: deleteUser
      });

    return showUserService;

    function getUsers () {
      return DelegatorService.get(urls.getUsersUrl);
    }

    function updateUser (updateUserModel) {
      return DelegatorService.put(urls.updateUserUrl, updateUserModel);
    }

    function deleteUser (user) {
      return DelegatorService.remove(urls.deleteUserUrl, user);
    }
  }
})();
