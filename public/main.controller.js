app.controller('MainController', function ($scope, FlashCardsFactory) {

	FlashCardsFactory.getFlashCards()
	.then(function(data) {
		$scope.flashCards = data;
	});

	$scope.getCategoryCards = function (category) {
		FlashCardsFactory.getFlashCards(category)
		.then(function(data) {
			$scope.flashCards = data;
		});
	}

	$scope.categories = [
	    'MongoDB',
	    'Express',
	    'Angular',
	    'Node'
	];

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
		}
	}
});


