app.controller("AddressListCtrl", function($scope, AddressFactory) {
    $scope.contacts = [];

    let getContacts = () => {
        AddressFactory.getContactList().then((contactz) => {
            $scope.contacts = contactz;
        }).catch((error) => {
            console.log("get Error", error);
        });

    };

    getContacts();

    $scope.deleteContact = (id) => {
        AddressFactory.deletz(id).then(() => {
            getContacts();
        }).catch((error) => {
            console.log("deleteContact error", error);
        });
    };

    $scope.inputChange = (contact) => {
    	ItemFactory.editItem(contact).then(() => {
    		///????????
    	}).catch((error) => {
    		console.log("inputChange error", error);
    	});
    };
});