(function (app) {

    var productsService = function ($q, constants, localStorageService, serviceHelper) {
        /// SERVER
        var _getProducts = function () {
            // TODO: Implement server code
        };
        var _addProduct = function (data) {
            // TODO: Implement server code
        };
        var _getProductById = function (id) {
            // TODO: Implement server code
        };
        var _updateProduct = function (id) {
            // TODO: Implement server code
        };

        /// LOCAL

        var _getProductsDummy = function () {
            var defer = $q.defer();
            // check if there are data in local storage
            var localData = localStorageService.get(constants.storageKeys.data.products);
            if (localData) {
                defer.resolve(localData);
            }
            else {
                var _url = 'app/dummy/products.json';

                serviceHelper.requestJson('GET', _url).then(function (d) {
                    // save to local storage for further usage
                    localStorageService.set(constants.storageKeys.data.products, d);
                    defer.resolve(d);
                }, function (err) {
                    defer.reject(err);
                });
            }

            return defer.promise;

        };

        var _getProductByIdDummy = function (id) {

        };

        var _addProductDummy = function (data) {
            var defer = $q.defer();
            var Products = localStorageService.get(constants.storageKeys.data.products);
            data.id = Products.length + 1;
            Products.push(data);
            localStorageService.set(constants.storageKeys.data.products, Products);
            defer.resolve();
            return defer.promise;
        };

        var _updateProductDummy = function (user) {
            var defer = $q.defer();
            var products = localStorageService.get(constants.storageKeys.data.products);
            // products.forEach(function(item){
            //     if(item.id===user.id){
            //         item = user;
            //     }
            // });
            angular.forEach(products, function (item) {
        		if (item.id === user.id) {
        			//item = value;
        			item.name = user.name;
        			item.age = user.age;
        			return false;
        		}
        	});
            localStorageService.set(constants.storageKeys.data.products, products);
            defer.resolve();
            return defer.promise;
        };

        // public method
        var svc = {
            getProducts: _getProductsDummy,
            getProductById: _getProductByIdDummy,
            addProduct: _addProductDummy,
            updateProduct: _updateProductDummy,
        };

        return svc;
    };

    app.factory('productsService', ('$q', 'constants', 'localStorageService', 'serviceHelper', productsService));

})(angular.module('appDemo'));