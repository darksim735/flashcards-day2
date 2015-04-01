app.controller('MainController', function ($scope, FlashCardsFactory) {

FlashCardsFactory.getFlashCards()
.then(function(response) {
	$scope.flashCards = response;
});

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
		}
	}

    // console.log(FlashCardsFactory);
FlashCardsFactory.getFlashCards().then(function(response) {console.log(response)});
});


