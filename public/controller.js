angular.module('arrayApp').controller('mainCtrl', function ($scope, mainService) {
    mainService.getPeople().then( response => {
        $scope.people = response.data;
    })
})