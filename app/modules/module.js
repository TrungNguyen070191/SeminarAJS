
var app = angular.module('appDemo', ['ngRoute', 'LocalStorageModule']);//

// app.config(function($sceDelegateProvider) {
//     $sceDelegateProvider.resourceUrlWhitelist([
//         'https://tryit.w3schools.com/**'
//     ]);
// });
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "/app/components/home.html",
            controller: ""
        })
        .when("/home", {
            templateUrl: "/app/components/home.html",
            controller: ""
        })
        .when("/users", {
            templateUrl: "/app/components/users.html",
            controller: "usersCtrl"
        })
        .when("/products", {
            templateUrl: "/app/components/products.html",
            controller: "productsCtrl"
        })
        
});