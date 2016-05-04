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
      getUserUrl: urlTemplate(REST_URL.getUser, {id:':id'}, {type: 'get'}),
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
        getUser: getUser,
        updateUser: updateUser,
        deleteUser: deleteUser
      });

    return showUserService;

    function getUsers (page) {
      return DelegatorService.get(urls.getUsersUrl + '?page=' + page);
    }

    function getUser(params) {
      return DelegatorService.get(urls.getUserUrl, params);
    }

    function updateUser (params, updateUserModel) {
      return DelegatorService.put(urls.updateUserUrl, params, updateUserModel);
    }

    function deleteUser (params) {
      return DelegatorService.remove(urls.deleteUserUrl, params, null);
    }
  }
})();
