(function (app) {

    var serviceHelper = function ($http, $q) {
        var _requestJson = function (method, url, data) {
            var defer = $q.defer();
            $http({
                //cache: true,
                method: method,
                url: url,
                data: data,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (d) {
                defer.resolve(d.data);
            }, function (error) {
                defer.reject(error);
            });

            return defer.promise;
        }

        var helper = {
            requestJson: _requestJson
        };

        return helper;
    };

    app.factory('serviceHelper', ('$http', '$q', serviceHelper));

})(angular.module('appDemo'));