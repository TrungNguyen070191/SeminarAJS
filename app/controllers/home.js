// (function (app) {

//     var homeCtrl = function ($rootScope, $scope) {
//         $scope.notify = function () {
//             $rootScope.$broadcast("NOTIFY");
//         }
//     };

//     app.controller('homeCtrl', ('$rootScope', '$scope', homeCtrl));

// })(angular.module('appDemo'));

app.controller('homeCtrl',function($rootScope, $scope){

     $scope.notify = function(){
        $rootScope.$broadcast("NOTIFY");
    }
});