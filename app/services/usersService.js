(function (app) {

    var usersService = function ($q, constants, localStorageService, serviceHelper) {
        /// SERVER
        var _getUsers = function () {
            // TODO: Implement server code
        };
        var _addUser = function (data) {
            // TODO: Implement server code
        };
        var _getUserById = function (id) {
            // TODO: Implement server code
        };
        var _updateUser = function (id) {
            // TODO: Implement server code
        };

        /// LOCAL

        var _getUsersDummy = function () {
            var defer = $q.defer();
            // check if there are data in local storage
            var localData = localStorageService.get(constants.storageKeys.data.users);
            if (localData) {
                defer.resolve(localData);
            }
            else {
                var _url = 'app/dummy/users.json';

                serviceHelper.requestJson('GET', _url).then(function (d) {
                    // save to local storage for further usage
                    localStorageService.set(constants.storageKeys.data.users, d);
                    defer.resolve(d);
                }, function (err) {
                    defer.reject(err);
                });
            }

            return defer.promise;

        };

        var _getUserByIdDummy = function (id) {

        };

        var _addUserDummy = function (data) {
            var defer = $q.defer();
            var Users = localStorageService.get(constants.storageKeys.data.users);
            data.id = Users.length + 1;
            Users.push(data);
            localStorageService.set(constants.storageKeys.data.users, Users);
            defer.resolve();
            return defer.promise;
        };

        var _updateUserDummy = function (user) {
            var defer = $q.defer();
            var users = localStorageService.get(constants.storageKeys.data.users);
            // users.forEach(function(item){
            //     if(item.id===user.id){
            //         item = user;
            //     }
            // });
            angular.forEach(users, function (item) {
        		if (item.id === user.id) {
        			//item = value;
        			item.name = user.name;
        			item.age = user.age;
        			return false;
        		}
        	});
            localStorageService.set(constants.storageKeys.data.users, users);
            defer.resolve();
            return defer.promise;
        };

        // public method
        var svc = {
            getUsers: _getUsersDummy,
            getUserById: _getUserByIdDummy,
            addUser: _addUserDummy,
            updateUser: _updateUserDummy,
        };

        return svc;
    };

    app.factory('usersService', ('$q', 'constants', 'localStorageService', 'serviceHelper', usersService));

})(angular.module('appDemo'));