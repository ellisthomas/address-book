app.controller("AddressListCtrl", function($rootScope, $scope, AddressFactory) {
    $scope.contacts = [];

    let getContacts = () => {
        AddressFactory.getContactList($rootScope.user.uid).then((contactz) => {
            $scope.contacts = contactz;
            console.log("contactz", contactz);

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


