myApp.service('getService',['$http', function($http){

  var service = this;

  service.getItems = function(){
    return $http({
      method:'GET',
      url:'/user/getItems'
    }).then(function(res) {
      console.log('this is the GET res', res.data);
        return res.data;
    });
  }; //end getItems function
}]); //end getService
