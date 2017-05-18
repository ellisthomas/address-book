app.controller("AddressNewCtrl", function($http, $location, $q, $scope, FIREBASE_CONFIG, AddressFactory) {
	
	$scope.addNewContact = () => {
		AddressFactory.postNewContact($scope.newContact).then((response) => {
			$scope.newContact = {};
			$location.url("contacts/new");
		}).catch((error) => {
			console.log("Add error", error);
		});
	};
});