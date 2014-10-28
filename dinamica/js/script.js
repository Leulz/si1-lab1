/**
 * Created by leulz on 26/10/14.
 */
var app = angular.module("aplicativo", []);

app.controller("control", function($scope) {
    $scope.aprendidos=[];
    $scope.aprender=[];

    $scope.addTema = function(){
        if($scope.tema!="") {
            $scope.aprender.push({tipo:"aprender",nome:$scope.tema});
            $scope.tema = "";
        }
    }

    $scope.removeTema = function(item){
        if(item.tipo=="aprender"){
            $scope.aprender.splice($scope.aprender.indexOf(item),1);
        }else{
            $scope.aprendidos.splice($scope.aprendidos.indexOf(item),1);
        }
    }

    $scope.changeTema = function(item){
        if(item.tipo=="aprender"){
            $scope.aprender.splice($scope.aprender.indexOf(item),1);
            item.tipo = "aprendido"
            $scope.aprendidos.push(item);
        }else{
            $scope.aprendidos.splice($scope.aprendidos.indexOf(item),1);
            item.tipo = "aprender"
            $scope.aprender.push(item);
        }
    }
});

/*
 This directive allows us to pass a function in on an enter key to do what we want.
 */
app.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});
