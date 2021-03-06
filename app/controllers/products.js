(function (app) {

    var productsCtrl = function ($scope, productsService) {

        var vm = $scope.vm = {};
        vm.searchPrice = 20000;
        vm.searchBrand = 'bra_All';
        vm.brands = [
            { name: 'bra_All', value: 'All' },
            { name: 'bra_Apple', value: 'Apple' },
            { name: 'bra_Samsung', value: 'Samsung' },
            { name: 'bra_Black Berry', value: 'Black Berry' }];

        var loadData = function () {
            productsService.getProducts().then(function (data) {
                $scope.data = data;
            });
        };


        loadData();
    };

    app.controller('productsCtrl', ('$scope', 'productsService', productsCtrl));

})(angular.module('appDemo'));