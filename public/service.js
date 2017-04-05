angular.module('arrayApp').service('mainService',function ($http) {
	let serverUrl = 'http://localhost:3022'
	this.getPeople = () => {
		return $http({
			method: 'GET',
			url: serverUrl + '/api/getdata'
		})
    }
})










