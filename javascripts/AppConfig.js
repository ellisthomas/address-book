app.run(function(FIREBASE_CONFIG) {
    firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider) {
    $routeProvider
        .when("/contacts/list", {
            templateUrl: "partials/address-list.html",
            controller: "AddressListCtrl"
        })
        .when("/contacts/new", {
            templateUrl: "partials/address-new.html",
            controller: "AddressNewCtrl"
        })
        .when("/contact/view/:id", {
            templateUrl: "partials/address-view.html",
            controller: "AddressViewCtrl"
        })
        .when("/contact/edit/:id", {
            templateUrl: "partials/address-new.html",
            controller: "AddressEditCtrl"
        })
        .otherwise("/contacts/list");
});