angular.module('portfolioApp')
  .service('appService', function() {
    var config = {
      apiKey: "AIzaSyA3QjrHSSEo07N0btg2PqYbP-RiPlEATIk",
      authDomain: "portfolio-7aded.firebaseapp.com",
      databaseURL: "https://portfolio-7aded.firebaseio.com",
      storageBucket: "portfolio-7aded.appspot.com",
      messagingSenderId: "624606716237"
    };
    firebase.initializeApp(config);

    return {
      firebase: firebase.database().ref()
    }
  });
