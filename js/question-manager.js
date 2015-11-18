function QuestionManager() {
    this.questions = [];
    this.currentIndex = 0;
    this.correctCount = 0;
    this.img = 0;
}

QuestionManager.prototype.displayQuestion = function(questionIndex) {
    var question = this.questions[questionIndex];
    // display title
    var titleElement = document.getElementById("question-title");
    titleElement.innerHTML = question.title;

    // display choices
    var choices = question.choices;
    for (var i = 0; i < choices.length; i++) {
        var choiceElement = document.getElementById("guess" + i);
        choiceElement.innerHTML = choices[i];

        questionManager.choiceHandler(choiceElement, question.answer);
    }

    // display image
    var imageElement = document.createElement("img");
    imageElement.src = 'img/' + question.img + '.jpg';
    imageElement.id = question.img;
    document.getElementById("image").appendChild(imageElement);

    // remove last image
    var item = document.getElementById(question.img-1);
    console.log(item);
    item.parentNode.removeChild(item);
};

QuestionManager.prototype.choiceHandler = function(id, answer) {
    // click button and move to next question
    id.onclick = function() {
        var pick = this.innerHTML;
        if (pick === answer) {
            questionManager.correctCount++;
        }
        questionManager.currentIndex++;

        questionManager.displayQuestion(questionManager.currentIndex);
    };
};
