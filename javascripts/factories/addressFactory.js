app.factory("addressFactory", function($http, $q, FIREBASE_CONFIG) {
    let getAddressList = () => {
        addresses = [];
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/items.json`)
                .then((fbItems) => {
                    let addressCollecetion = fbItems.data;
                    if (addressCollecetion !== null) {
                        Object.keys(addressCollecetion).forEach((key) => {
                            addressCollecetion[key].id = key;
                            addrezz.push(addressCollecetion[key]);
                        });
                    }
                    resolve(addresses);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };







return {getAddressList:getAddressList};

});