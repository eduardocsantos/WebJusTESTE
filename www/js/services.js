angular.module('starter.services', [])

.factory('Context', function() {
  var config = {

   apiKey: "AIzaSyC9Q30VTk3TOSr7oFT6CJ7wULZGBd5Z_b0",
    authDomain: "webjus-f3a6a.firebaseapp.com",
    databaseURL: "https://webjus-f3a6a.firebaseio.com",
    storageBucket: "webjus-f3a6a.appspot.com",
    messagingSenderId: "998057938084"
    
  };
  
  firebase.initializeApp(config);  

  return {
    get: function() {
      return firebase;
    }
  }
})
.factory('Login', function(Context) {
  
  return {
    login: function(email, senha, callback) {
       firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(function() {
          alert("Logado");
          callback();
        })
        .catch(function(error) {
         callback((error) + window.alert("Erro !") );

        });
    },
    novo: function(email, senha, callback) {
      firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then(function() {
           alert("Cadastrado com Sucesso!");
          callback();
        })
        .catch(function(error) {
         callback((error) + window.alert("Erro !") );
        });
    }
  };
})
.factory('Tarefas', function(Context) {
  return {
    get: function(callback) {
      firebase.database().ref('tarefas').on('value', function(snapshot) {
        callback(snapshot.val());
      })
    }
  }
})