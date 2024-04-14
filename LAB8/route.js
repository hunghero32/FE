var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/listHoaDon", {
            templateUrl: "views/list.html",
            controller: "listHoaDon"
        })
        .when("/listHoaDon/add", {
            templateUrl: "views/add.html",
            controller: "add"
        })
        .when("/listHoaDon/edit/:id", {
            templateUrl: "views/edit.html",
            controller: "edit"
        })
        .otherwise({
            redirectTo: "/listHoaDon"
        })
})