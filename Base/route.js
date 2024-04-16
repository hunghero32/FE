var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/list.html",
            controller: "list"
        })
        .when("/add", {
            templateUrl: "views/add.html",
            controller: "add"
        })
        .when("/update/:id", {
            templateUrl: "views/edit.html",
            controller: "update"
        })
        .otherwise({
            redirectTo: "views/list.html"
        })
})