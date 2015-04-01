app.controller('MainController', function ($scope, FlashCardsFactory) {
	$scope.flashCards = FlashCardsFactory.getFlashCards();

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
		}
	}

    console.log(FlashCardsFactory);
    
    setTimeout( function(){ console.log($scope.flashCards);}
    , 2000);
});


