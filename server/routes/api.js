var express = require('express');
var angular = require('angular');
var router = express.Router();
var toDo = require('../database/databaseTEST');
//get toDo
var app = angular.module('MainForm', []);
/* POST new todo */
/* PUT update complete status */
/* DELETE delete task */
module.exports = router;