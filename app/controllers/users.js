
// My style
(function (app) {

    var usersCtrl = function ($rootScope, $scope, $http, usersService) {//
        var loadData = function () {
            usersService.getUsers().then(function (data) {
                $scope.users = data;
            });
            // var _url = 'app/dummy/users.json';

            // USE HTTP AJAX
            // $http.get(_url)
            //     .then(function (response) {
            //         $scope.users = response.data;
            //     }, function (response) {
            //         //Second function handles error
            //         $scope.error = "Something went wrong";
            //     });
        };

        var titleCreate = 'Create New User';
        var titleEdit = 'Edit User';

        $scope.header = '';
        $scope.showAction = false;
        $scope.action = '';
        //$scope.notify = '';

        // Execute broadcast
        $rootScope.$on("NOTIFY",function(){
            $rootScope.notify = 'Called';
        });

        $scope.changeAction = function (action, user) {
            $scope.showAction = true;
            $scope.action = action;
            $scope.user = { name: '', country: '' };

            switch (action) {
                case 'add': {
                    $scope.header = titleCreate;
                    break;
                };
                case 'edit': {
                    $scope.header = titleEdit;
                    $scope.user = user;
                    break;
                };
                case 'delete': {
                    $scope.showAction = false;
                    $scope.users.splice(user, 1);
                    break;
                }
            }
        }

        var checkUser = () => { throw new Error('User underfined'); };

        $scope.saveAction = (user = checkUser()) => {
            $scope.showAction = false;
            if ($scope.action == 'add') {
                $scope.users.push(user);
            } else {
                usersService.updateUser(user).then(function (data) {
                    loadData();
                });
            }
        };

        loadData();
    };

    app.controller('usersCtrl', ('$rootScope', '$scope', '$http', 'usersService', usersCtrl));//

})(angular.module('appDemo'));

// Basic style
// app.controller('usersCtrl',function($scope){

// });