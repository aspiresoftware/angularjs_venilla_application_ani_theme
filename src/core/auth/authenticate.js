(function() {
  'use strict';

  angular.module('nd')
  .run(function ($rootScope,
   $state,
   Session) {
    $rootScope.$on('$stateChangeStart', stateChangeStart);

     function stateChangeStart(event,
      toState){

      if(toState && toState.name === 'login' && Session.isLoggedIn) {
        $state.go('overview');
        event.preventDefault();
      } else if (toState.authenticate && !Session.isLoggedIn){
        $state.go('login');
        event.preventDefault();
      }
    }
});
})();
