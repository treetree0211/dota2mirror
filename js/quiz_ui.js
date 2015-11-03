var QuizUI = {
    // display next
    displayNext: function() {
        if(quiz.hasEnded()) {
            this.displayScore();
        } else {

            this.displayQuestions();
            this.displayChoice();
            this.displayImage();
            this.displayProgress();

        }
    },
    //display questions
    displayQuestions: function() {
        this.populateIdWithHTML("question", quiz.getCurrentQuestion().text);
    },
    // display image
    displayImage: function() {
        this.imageWithHTML("image", quiz.img);
    },
    // display choice
    displayChoice: function() {
        var choices = quiz.getCurrentQuestion().choices;

        for(var i = 0; i < choices.length; i++) {
            this.populateIdWithHTML("choice" + i, choices[i]);
            this.guessHandler("guess" + i, choices[i]);
        }
    },
    // display score
    displayScore: function() {
        var gameOverHTML = "<h1>Game Over</h1>";
        gameOverHTML += "<h2> Your score is: " + quiz.score + "</h2>";
        this.populateIdWithHTML("quiz", gameOverHTML);
    },
    // display text according to ID
    populateIdWithHTML: function(id, text) {
        var element = document.getElementById(id);
        element.innerHTML = text;
    },
    // display img according to id
    imageWithHTML: function(id, img) {
            var element = document.createElement("img");
            element.src = 'img/' + img +'.jpg';
            element.id = img;
            document.getElementById(id).appendChild(element);

            var item = document.getElementById(img-1);
            item.parentNode.removeChild(item);


    },
    // display progress
    displayProgress: function() {
        var currentQuestionNumber = quiz.currentQuestionIndex + 1;
        this.populateIdWithHTML("progress", "Question " + currentQuestionNumber + " of " + quiz.questions.length);
    },
    // delete first image according to the first question
    removeImage: function(id) {
        var list = document.getElementById(id);
                if(list.hasChildNodes()) {
                    list.removeChild(list.childNodes[0]);
                }

    },
    // guess handler
    guessHandler: function(id, guess) {
        var button = document.getElementById(id);
        button.onclick = function() {
            quiz.guess(guess);

            QuizUI.displayNext();
        }
    }

};





