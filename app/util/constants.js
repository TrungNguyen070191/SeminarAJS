(function (app) {
    'use strict';

    var constants = {
        // LocalStorageKey
        storageKeys: {
            data: {
                // local data keys
                users: 'users',
            }
        },
        events: {
            
        }
    };

    app.constant('constants', constants);

})(angular.module('appDemo'));