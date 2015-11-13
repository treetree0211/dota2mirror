var questionManager = new QuestionManager();
var questions;

// create questions
// get json file
var request = new XMLHttpRequest();

// call back function
request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
        questions = JSON.parse(request.responseText);
        questionManager.questions = questions;
        questionManager.displayQuestion(questionManager.currentIndex);
    }
};
request.open('GET', 'data/questions.json');
request.send();

