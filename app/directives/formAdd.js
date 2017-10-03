(function (app) {

    var formAddCtrl = function ($scope) {
        $scope.header = '';
        $scope.showAction = false;
        $scope.action = '';

        $scope.changeAction = function (action, data) {
            $scope.showAction = true;
            $scope.action = action;
            $scope.data = { name: '', country: '' };

            switch (action) {
                case 'add': {
                    $scope.header = titleCreate;
                    break;
                };
            }
        }
    };

    var formAdd = function () {
        return {
            restrict: 'AE',
            scope: {
                scope: '=',
                data: '=data'
            },
            controller: ['$scope', formAddCtrl],
            templateUrl: './app/directives/formAdd.html'
        }
    };

    app.directive('formAdd', [formAdd]);

})(angular.module('appDemo'));