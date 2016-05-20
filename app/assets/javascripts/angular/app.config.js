angular.module("testapp")
    .config([
        "$stateProvider", "$urlRouterProvider",
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state("home", {
                    url: "/",
                    controller: "homeCtrl",
                    templateUrl: "angular/templates/home.html"
                })
        }
    ]);
