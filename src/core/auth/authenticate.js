(function() {
  'use strict';

  angular.module('nd')
  .run(function ($rootScope,
   $state,
   Session) {
    $rootScope.$on('$stateChangeStart', stateChangeStart);

     function stateChangeStart(event,
      toState){
      if (toState.authenticate && !Session.isLoggedIn){
        $state.go('login');
        event.preventDefault();
      }
    }
});
})();
