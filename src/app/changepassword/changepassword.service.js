(function() {
  angular.module('nd')
    .factory('ChangePasswordService', ChangePasswordService);

  function ChangePasswordService (
    REST_URL,
    DelegatorService,
    urlTemplate,
    CachedRequestHandler
    ) {

    var changePasswordService, urls;

    urls = {
      changePasswordUrl: urlTemplate(REST_URL.changePassword, {}, {type: 'post'})
    };

    changePasswordService = angular.extend(
      {},
      CachedRequestHandler,
      {
        modelName: 'changePasswordModel'
      },
      {
        changePassword: changePassword
      });

    return changePasswordService;

    function changePassword (changePasswordModel) {
      return DelegatorService.post(urls.changePasswordUrl, changePasswordModel);
    }
  }
})();
