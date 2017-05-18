myApp.controller('PublicController', ['getService', function(getService) {
  var vm = this;

  vm.getItems = function(data) {
    getService.getItems().then(function(data){
      vm.items = data;
      console.log('this is vm.items', vm.items);
    });
  } //end getItems function

  vm.getItems();
}]); //end PublicController
