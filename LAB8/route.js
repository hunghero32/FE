var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/list.html",
            controller: "listHoaDon"
        })
        .when("/add", {
            templateUrl: "views/add.html",
            controller: "add"
        })
        .when("/edit/:id", {
            templateUrl: "views/edit.html",
            controller: "edit"
        })
        .otherwise({
            redirectTo: "views/list.html"
        })
})