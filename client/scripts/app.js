var express = require('express');
var router = express.Router();
var angular = require('angular');
var toDo = require('../database/databaseTEST');


angular.module('ToDoApp', [])
    .controller('MainForm', ['$scope', function($scope) {
        $scope.master = {};

        $scope.update = function(user) {
            $scope.master = angular.copy(user);
        };



    }])

    .controller('getTODO', ['$scope','$http', function($scope, $http) {
    $http.get(toDo)
        .success(function (response) {
            $scope.text = response.ToDos;
        });
    }]);
