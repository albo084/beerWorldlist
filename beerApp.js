/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
  /* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
  var beerApp = angular.module('beerApp', []);
      beerApp.controller('beerCtrl', function ($scope, $http){
        $http.get('beers.json').success(function(data) {
          $scope.beers = data;
        });
        $scope.sortField = 'abv';
      });


