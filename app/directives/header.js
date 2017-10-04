app.directive('header',function(){
    return {
        restrict: 'EA',
        transclude: true,
        scope: {
            title: "@title" // "=" for two-way biding and "&" for function
        },
        template:"<h3>{{title}}</h3><div ng-transclude></div>"
    };
});