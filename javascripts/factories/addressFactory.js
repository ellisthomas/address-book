app.factory("AddressFactory", function($http, $q, FIREBASE_CONFIG) {
    let getContactList = (userId) => {
        let contactz = [];
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json?orderBy="uid"&equalTo="${userId}"`)
                .then((fbItems) => {
                    let contactCollecetion = fbItems.data;
                    if (contactCollecetion !== null) {
                        Object.keys(contactCollecetion).forEach((key) => {
                            contactCollecetion[key].id = key;
                            contactz.push(contactCollecetion[key]);
                        });
                    }
                    resolve(contactz);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };


    let getSingleContact = (id) => {
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts/${id}.json`)
                .then((resultz) => {
                    resultz.data.id = id;
                    resolve(resultz);
            }).catch((error) => {
                reject(error);
            });

        });
    };

    let postNewContact = (newContact) => {
        return $q((resolve, reject) => {
            $http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`, JSON.stringify(newContact))
                .then((resultz) => {
                    resolve(resultz);
                }).catch((error) => {
                    reject(error);
                });
        });
    };

    let deletz = (contactId) => {
        return $q((resolve, reject) => {
            $http.delete(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`)
            .then((resultz) => {
                resolve();
            }).catch((error) => {
                reject(error);
            });
        });
    };

    let editContact = (contact) => {
        return $q((resolve, reject) => {
            $http.put(`${FIREBASE_CONFIG.databaseURL}/contacts/${contact.id}.json`, JSON.stringify({
                firstName: contact.firstName,
	            lastName: contact.lastName,
	            streetAddress: contact.streetAddress,
	            city: contact.city,
	            state: contact.state,
	            zip: contact.zip,
	            phone: contact.phone,
	            email: contact.email
            }) 
            ).then((resultz) => {
                resolve(resultz);
            }).catch((error) => {
                reject(error);
            });
        });
    };







return {getContactList:getContactList, getSingleContact:getSingleContact, postNewContact:postNewContact, deletz:deletz, editContact:editContact};

});