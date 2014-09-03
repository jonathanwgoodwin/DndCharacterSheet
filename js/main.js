// Generated by CoffeeScript 1.7.1
(function() {
  var dndSheetsApp;

  dndSheetsApp = angular.module('dndCharacterSheets', []);

  dndSheetsApp.controller('CharSheet', function($scope, $http) {
    $http.get("/js/data.json").success(function(data) {
      return $scope.char = data;
    });
    return $scope.abilityScoreUpdate = function() {
      var ability, array, obj, _i, _len, _ref;
      console.log(this);
      console.log($scope.char.abilities);
      array = [];
      _ref = $scope.char.abilities;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        ability = _ref[_i];
        obj = {};
        obj.name = ability.name;
        obj.score = ability.score;
        obj.modifier = Math.floor((ability.score - 10) / 2);
        array.push(obj);
      }
      $scope.char.abilities = array;
      return $scope.$apply();
    };
  });

}).call(this);
