/**
 * Created by cwgraff on 1/8/16.
 */

var canList = [];
var app = angular.module('myApp', []);

app.controller('myController', function($scope, $http){

    $scope.getData = function(){
        $http({
            method: 'GET',
            url: '/demCans'
        }).then(function(response){
            $scope.list = response.data;
            //console.log(list);
            canList = response.data;
        });

    };



    $scope.pickWinner = function(){
        $scope.winner = canList[randomNumber(-0.5,9.49)];
    }

});

function randomNumber(min, max){
    return Math.round(Math.random() * (max - min) + min);
}