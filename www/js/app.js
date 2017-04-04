
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  
  $stateProvider
    .state('login', {
      url: '/login',
      views: {
        'view-inicial': {
          templateUrl: 'templates/login.html',
          controller: 'LoginCtrl'
        }
      }
    })
    .state('cadastro', {
      url: '/cadastro',
      views: {
        'view-inicial': {
          templateUrl: 'templates/cadastro.html',
          controller: 'LoginCtrl'
        }
      }
    })
    .state('tarefas', {
      url: '/tarefas',
      views: {
        'view-inicial': {
          templateUrl: 'templates/tarefas.html',
          controller: 'TarefasCtrl'
        }
      }
    })

    .state('noticias', {
      url: '/noticias',
      views: {
        'view-inicial': {
          templateUrl: 'templates/noticias.html',
          controller: 'TarefasCtrl'
        }
      }
    })


   .state('constituicao', {
      url: '/constituicao',
      views: {
        'view-inicial': {
          templateUrl: 'templates/constituicao.html',
          controller: 'TarefasCtrl'
        }
      }
    })


      .state('denuncias', {
      url: '/denuncias',
      views: {
        'view-inicial': {
          templateUrl: 'templates/denuncias.html',
          controller: 'TarefasCtrl'
        }
      }
    })


  
  $urlRouterProvider.otherwise('/login');

});
