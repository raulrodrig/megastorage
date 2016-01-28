/** Main AngularJS Web Application  */
var app = angular.module('megaStorageApp', [
  'ngRoute'
]);

/** Configure the Routes **/
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    .when("/carousel-slide", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
    .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})

    // 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/*** Controls all Pages ***/
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  // Activates the Carousel
    $('.carousel').carousel({
      interval: 5000
    })

    // Activates Tooltips for Social Links
    $('.tooltip-social').tooltip({
      selector: "a[data-toggle=tooltip]"
    })


});