angular.module('myApp')
.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "view/book.html",
        controller: "bookController" // Ensure it matches the controller name
    });
});
