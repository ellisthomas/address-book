app.controller("AddressNewCtrl", function($rootScope, $http, $location, $q, $scope, FIREBASE_CONFIG, AddressFactory) {
	
	$scope.addNewContact = () => {
		$scope.newContact.uid = $rootScope.user.uid;
		AddressFactory.postNewContact($scope.newContact).then((response) => {
			$scope.newContact = {};
			$location.url("contacts/list");
		}).catch((error) => {
			console.log("Add error", error);
		});
	};
});