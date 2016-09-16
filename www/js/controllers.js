angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };
  })

  .controller('PlaylistsCtrl', function ($scope, news) {
    var latestDate = new Date();
    function parseDate(date) {
      var year = date.getFullYear().toString();
      var month =((date.getMonth()+1)<10?"0"+(date.getMonth()+1):(date.getMonth()+1)).toString() ;
      var day = (date.getDate()<10?"0"+date.getDate():date.getDate()).toString();
      return year+month+day;
    }
    function refresh() {
      console.log('refresh');
      news.latest.get(function (news) {
        $scope.playlists = news.stories;
        $scope.sliders = news.top_stories;
        $scope.$broadcast('scroll.refreshComplete');
        $scope.$broadcast('scroll.infiniteScrollComplete');
      });
    }
    function loadMore() {
      var dayBefore = new Date();
      dayBefore.setDate(latestDate.getDate()-1);
      latestDate = dayBefore;
      news.before.get({date:parseDate(dayBefore)},function (news) {
        news.stories.forEach(function (story) {
          $scope.playlists.push(story);
        });
        $scope.$broadcast('scroll.infiniteScrollComplete');
        console.log(news);
      })
    }
    $scope.doRefresh = refresh;
    $scope.loadMore = loadMore;
    refresh();

  })

  .controller('PlaylistCtrl', function ($scope, $stateParams) {


  });
