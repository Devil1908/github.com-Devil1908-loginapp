var app =angular.module('main'['ngRoute']);

app.config(function($routeProvider){
    routeProvider.when('/'{
        template url:'./components/home.html',
        controller: 'homeCtrl'
    }).when('/login',{
        template url:'./components/login.html',
        controller:'loginCtrl'
    })
    .otherwise({
        template url:'404'
    })
});

app.controller('homeCtrl',function($scope,$location){
 $scope.gotologin()=function(){
     $location.path('/login');
 };
$scope.register()=function(){
    $location.path('/register');
};
});

app.controller('loginCtrl',function($scope,$http){
    $scope.login=function(){
        var username=$scope.username;
        var password=$scope.password;
        $http({
            url:'http://localhost/angularjs/server.php',
            method: 'Post',
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            },
            data:'username'=+username+'&password='+password
        }).then (function(response){
           console.log(response.data);
        })
    }
});