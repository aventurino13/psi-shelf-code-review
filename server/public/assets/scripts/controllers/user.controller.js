myApp.controller('UserController', ['$http', '$location', function($http, $location) {
  // This happens after view/controller loads -- not ideal but it works for now.
  var vm = this;

  console.log('checking user');

  // Upon load, check this user's session on the server
  $http.get('/user').then(function(response) {
      if(response.data.username) {
          // user has a curret session on the server
          vm.userName = response.data.username;
          console.log('User Data: ', vm.userName);
      } else {
          // user has no session, bounce them back to the login page
          $location.path("/home");
      }
  });

  vm.logout = function() {
    $http.get('/user/logout').then(function(response) {
      console.log('logged out');
      $location.path("/home");
    });
  } //end logout function

  vm.addItem=function(){
    console.log('in add items!');
    var itemToSend = {
      description: vm.description,
      imgURL: vm.imgURL,
      user: vm.userName
    }
    console.log('this is the itemTOsend', itemToSend);
    $http({
      method:'POST',
      url:'/user/AddItem',
      data: itemToSend
    }).then(function(res) {
      console.log('this is the res', res);

      vm.getItems();
    });
  }; //end addItem function
  vm.getItems=function(){
    $http({
      method:'GET',
      url:'/user/getItems'
    }).then(function(res) {
      console.log('this is the GET res', res.data);
        vm.items = res.data;
    });
  }; //end getItems function



}]);
