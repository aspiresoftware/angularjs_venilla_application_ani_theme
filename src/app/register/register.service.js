(function() {
  angular.module('nd')
    .factory('RegisterUserService', RegisterUserService);

  function RegisterUserService (
    REST_URL,
    DelegatorService,
    urlTemplate,
    CachedRequestHandler
    ) {

    var registerUserService, urls;

    urls = {
      registerUserUrl: urlTemplate(REST_URL.registerUser, {}, {type: 'post'})
    };

    registerUserService = angular.extend(
      {},
      CachedRequestHandler,
      {
        modelName: 'registerUserModel'
      },
      {
        registerUser: registerUser
      });

    return registerUserService;

    function registerUser (registerUserModel) {
      return DelegatorService.post(urls.registerUserUrl, null, registerUserModel);
    }
  }
})();
