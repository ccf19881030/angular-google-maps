angular.module('appMaps', ['google-maps'])
    .controller('mainCtrl', function($scope, $log) {
        $scope.map = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 4 }
        $scope.options = {scrollwheel: false};
        $scope.searchLocationMarker = {
            title: "Fancy Title!",
            coords: {
                latitude: 40.1451,
                longitude: -99.6680
            }
        }
    });