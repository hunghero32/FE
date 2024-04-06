angular.module('myApp')
.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "view/list.html",
        controller: "hoadon" 
    })
    .when("/add", {
        templateUrl: "view/add.html",
        controller: "hoadon" 
    })
    .when("/update/:id", {
        templateUrl: "view/update.html",
        controller: "update" 
    });
});