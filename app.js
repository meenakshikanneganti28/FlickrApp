(function(){
  'use strict';

    var FlickrModule = angular.module('FlickrApp', ['ngMaterial','ngDialog'])

    .controller('FlickrCtrl', ['$scope','$http','ngDialog', function($scope,$http,ngDialog){
      $scope.results = [];

      $scope.search = function () {
      $http({
        method:'GET',
        url:'https://api.flickr.com/services/rest',
        params:{
          method:'flickr.photos.search',
          api_key:'8253d10aaa027afa814fde8294be5111',
          text: $scope.searchFor,
          format:'json',
          nojsoncallback: 1
        } 
      }).success(function(data){

        $scope.results = data;

      }).error(function(error) {
          console.error(error);
        });
      };

        $scope.openImage = function (photoID,photoFarm,photoServer,photoSecret,photoTitle) {
            $scope.photoID = photoID;
            $scope.photoFarm = photoFarm;
            $scope.photoServer = photoServer;
            $scope.photoSecret = photoSecret;
            $scope.photoTitle = photoTitle;

            ngDialog.open({
            template: "openImage.html",
            showClose: true,
            closeByEscape: true,
            closeByDocument: false,    
            className: 'ngdialog ngdialog-theme-default ng-scope',
            scope: $scope
        });

        };  

         }]);
})();