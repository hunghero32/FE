angular.module('myApp')
.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "view/post.html",
        controller: "post" 
    })
    .when("/add", {
        templateUrl: "view/add.html",
        controller: "add" 
    });
});
