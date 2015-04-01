var app = angular.module('flashCards', []);

app.factory('FlashCardsFactory', function ($http) {
    return {
        getFlashCards: function (category) {
            return (
            $http({
                url: "/cards", 
                method: "GET",
                params: {category: category}
            })
            .then(function (response) {
                return response.data;
            })
            )
        }
    };
});


