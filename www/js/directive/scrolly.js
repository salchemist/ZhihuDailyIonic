/**
 * Created by kongx on 2016/9/17.
 */
var myApp = angular.module('starter');
myApp.directive('scrolly', function ($document,$ionicScrollDelegate) {
  return {
    restrict: 'A',
    link: function (scope, $element, attrs) {
      $element.on('scroll', function (event) {

        var scroller = element[0];
        
      var top = $ionicScrollDelegate.getScrollPosition().top;
        console.log('yes',top);
      });
    }
  };
});
