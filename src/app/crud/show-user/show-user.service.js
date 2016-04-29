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
      updateUserUrl: urlTemplate(REST_URL.updateUser, {id:':id'}, {type: 'put'}),
      deleteUserUrl: urlTemplate(REST_URL.deleteUser, {id:':id'}, {type: 'delete'})
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

    function updateUser (params, updateUserModel) {
      return DelegatorService.put(urls.updateUserUrl, params, updateUserModel);
    }

    function deleteUser (user) {
      return DelegatorService.remove(urls.deleteUserUrl, user);
    }
  }
})();
