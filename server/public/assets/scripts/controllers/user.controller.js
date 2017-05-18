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
  }
vm.addItem=function(){
  console.log('in add items!');
  var itemToSend = {
    description: vm.description,
    imgURL: vm.imgURL,
    user: vm.userName
  }
console.log(itemToSend);
}

//   vm.newItem =[];
// vm.addItem = function(item){
//   console.log('item added:',vm.itemToAdd);
//    vm.newItem.push(vm.itemToAdd)



}]);
