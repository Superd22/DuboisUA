var app = angular.module('Dubois', ['ngMaterial']);

app.controller('main_controller', ["$scope", function ($scope) {

  $scope.UA = 1;
  $scope.star = {
    type:"G",
    mass:1
  };
  $scope.planet = {
    type:"Terre",
    mass:6000
  };

  $scope.calc_result = function() {
    var top = Math.pow(($scope.UA * (1.496e+11)),3);
    var bottom = (6.67e-11) * (( ($scope.star.mass * 1.988e+30) + ($scope.planet.mass * 1e21) ));

    var r = 2 * Math.PI * Math.sqrt( top / bottom  )

    $scope.result = Math.round(r / (3600*24));
  }

  $scope.calc_result();
}]);

app.controller('star_selector', ["$scope", function($scope) {

  // Set correct star type
  $scope.$watch("star.mass",function(val) {
    if(val < 0.5)
    $scope.star.type = "M";
    else if(val < 0.8)
    $scope.star.type = "K";
    else if(val < 1.04)
    $scope.star.type = "G";
    else if(val < 1.4)
    $scope.star.type = "F";
    else if(val < 2.1)
    $scope.star.type = "A";
    else if(val < 16)
    $scope.star.type = "B";
    else
    $scope.star.type = "O";
  });

}]);


app.controller('planet_selector', ["$scope", function($scope) {


  $scope.planets = [
    {mass:10, name:"Asteroide"},
    {mass:100, name:"Panetoide"},
    {mass:640, name:"Mars"},
    {mass:3000, name:"Petite tellurique"},
    {mass:6000, name:"Terre"},
    {mass:15000, name:"Grande tellurique"},
    {mass:50000, name:"Uranus"},
    {mass:500000, name:"Saturne"},
    {mass:1500000, name:"Jupiter"},
  ];

  // Set correct planet type
  $scope.$watch("planet.mass",function(val) {
    if(val <= 10)
    $scope.planet.type = "Asteroide";
    else if(val <= 100)
    $scope.planet.type = "Panetoide";
    else if(val <= 3000)
    $scope.planet.type = "Petite tellurique";
    else if(val <= 8000)
    $scope.planet.type = "Terre";
    else if(val <= 20000)
    $scope.planet.type = "Grande tellurique";
    else if(val <= 50000)
    $scope.planet.type = "Uranus";
    else if(val <= 500000)
    $scope.planet.type = "Saturne";
    else if(val <= 1500000)
    $scope.planet.type = "Jupiter";
  });

}]);

app.directive('duboisMain', function() {
  return {
    templateUrl: "template/main.html",
    restrict:'E',
    replace: true
  };
});

app.directive('duboisStarSelector', function() {
  return {
    templateUrl: "template/star_selector.html",
    restrict:'E',
    controller:'star_selector',
    scope: {
      star: "="
    },
    replace: true
  };
});

app.directive('duboisPlanetSelector', function() {
  return {
    templateUrl: "template/planet_selector.html",
    restrict:'E',
    controller:'planet_selector',
    scope: {
      planet: "="
    },
    replace: true
  };
});

app.directive('duboisUaSelector', function() {
  return {
    templateUrl: "template/ua_selector.html",
    restrict:'E',
    replace: true
  };
});

app.directive('duboisFinal', function() {
  return {
    templateUrl: "template/final.html",
    restrict:'E',
    replace: true
  };
});
app.config(function ($mdThemingProvider) {
  var customPrimary = {
    '50': '#587487',
    '100': '#4e6778',
    '200': '#445a68',
    '300': '#3a4d59',
    '400': '#303f49',
    '500': '#26323a',
    '600': '#1c252b',
    '700': '#12171b',
    '800': '#080a0c',
    '900': '#000000',
    'A100': '#638296',
    'A200': '#718ea2',
    'A400': '#809aac',
    'A700': '#000000'
  };
  $mdThemingProvider
  .definePalette('customPrimary',
  customPrimary);

  var customAccent = {
    '50': '#64350b',
    '100': '#7b410e',
    '200': '#924d10',
    '300': '#a85913',
    '400': '#bf6516',
    '500': '#d67118',
    '600': '#e98b39',
    '700': '#eb9950',
    '800': '#eea667',
    '900': '#f0b37e',
    'A100': '#e98b39',
    'A200': 'rgb(230,126,34)',
    'A400': '#d67118',
    'A700': '#f3c195'
  };
  $mdThemingProvider
  .definePalette('customAccent',
  customAccent);

  var customWarn = {
    '50': '#e48f86',
    '100': '#df7c72',
    '200': '#db695d',
    '300': '#d65548',
    '400': '#d14233',
    '500': 'rgb(192,57,43)',
    '600': '#ab3326',
    '700': '#962d22',
    '800': '#81261d',
    '900': '#6d2018',
    'A100': '#e9a39b',
    'A200': '#edb6b0',
    'A400': '#f2c9c5',
    'A700': '#581a14'
  };
  $mdThemingProvider
  .definePalette('customWarn',
  customWarn);

  var customBackground = {
    '50': '#597ea2',
    '100': '#507192',
    '200': '#476481',
    '300': '#3e5771',
    '400': '#354b60',
    '500': 'rgb(44,62,80)',
    '600': '#233140',
    '700': '#1a242f',
    '800': '#11181f',
    '900': '#080b0e',
    'A100': '#698aac',
    'A200': '#7997b5',
    'A400': '#8aa4be',
    'A700': '#000000'
  };
  $mdThemingProvider
  .definePalette('customBackground',
  customBackground);

  $mdThemingProvider.theme('default')
  .primaryPalette('customPrimary')
  .accentPalette('customAccent')
  .warnPalette('customWarn')
  .backgroundPalette('customBackground')
});
