var myApp = angular.module('myApp', [
  'ngRoute','ng-fusioncharts',
  'patientControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'partials/list.html',
    controller: 'ListController'
  }).
  when('/details/:itemId', {
    templateUrl: 'partials/details.html',
    controller: 'DetailsController'
    //
    //controller: 'ExtraController'
    //
  }).
  when('/reports/:itemid',{
       templateUrl: 'partials/reports.html',
       controller: 'ReportsController'
  }).    
  when('/nodiabetes',{
       templateUrl: 'partials/nodiabetes.html',
       controller: 'nodiabetesController'
  }).
  when('/technology_used',{
       templateUrl: 'partials/technology_used.html',
       controller: 'technology_usedController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);
