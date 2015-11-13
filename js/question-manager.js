function QuestionManager() {
    this.questions = [];
    this.currentIndex = 0;
    this.correctCount = 0;
}

QuestionManager.prototype.displayQuestion = function(questionIndex) {
    var element = document.getElementById("question");
    var choices = questions[questionIndex].choices;
    element.innerHTML = questions[questionIndex].title;

    for (var i = 0; i < choices.length; i++) {
        var index = document.getElementById("choice" + i);
        index.innerHTML = choices[i];
    }
};

QuestionManager.prototype.pickChoice = function(choice) {

};
