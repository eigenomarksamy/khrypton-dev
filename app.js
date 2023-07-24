// app.js
var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutController'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});

app.controller('HomeController', function($scope) {
    // Controller logic for the home page
});

app.controller('AboutController', function($scope) {
    // Controller logic for the about page
});

app.controller('ContactController', function($scope) {
    // Controller logic for the contact page
});
