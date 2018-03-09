'use strict';

var app = angular.module('angularjs-dragula-example', [angularDragula(angular)]);

app.controller('RepeatCtrl', ['$scope',
  function ($scope) {
    $scope.articles = [
        {
            name: "Look at this article!",
            date: "March 8th, 2018"
        },
        {
            name: "This one is fun!",
            date: "April 12th, 2018"
        },
        {
            name: "Lackluster article...",
            date: "June 14th, 2018"
        }
    ];

    
    $scope.$on('articleDrag.drop', function(el, target, source, sibling) {
        alert('The Object: [' + target[0].innerText + "] was dragged and dropped into a new place");
    });
  }
]);

