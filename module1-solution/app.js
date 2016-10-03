(function () {
  angular.module('LunchCheck', [])

  .controller('LunchCheckController', function ($scope) {
    $scope.lunchList = "";
    $scope.message = "";
    var tableLength;

    $scope.CreateTable = function(input) {
      tableLength = 0;
      if (input!=="") {
      var table = input.split(',');
      tableLength = table.length;
      }
      CreateMessage();
    };
    var CreateMessage = function () {
      if      (tableLength === 0 )  {$scope.message = "Please enter data first";}
      else if (tableLength <= 3)    {$scope.message = "Enjoy";}
      else                          {$scope.message = "Too much";}
    };


  }) //end of controller
})();
