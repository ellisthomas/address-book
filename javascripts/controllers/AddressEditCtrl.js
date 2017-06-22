app.controller("AddressEditCtrl", function($location, $routeParams, $scope, AddressFactory) {
    $scope.newTask = {};

    AddressFactory.getSingleContact($routeParams.id).then((results) => {
    	$scope.newContact = results.data;
    }).catch((error) => {
    	console.log("getSingleContact", error);
    });

    $scope.addNewContact = () => {
    	AddressFactory.editContact($scope.newContact).then(() => {
    		$location.url("/contacts/list");
    	}).catch((error) => {
    		console.log("editConact", error);
    	});
    };
});