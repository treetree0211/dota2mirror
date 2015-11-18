var questionManager = new QuestionManager();

// create questions
// get json file
var request = new XMLHttpRequest();

// call back function
request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
        questionManager.questions = JSON.parse(request.responseText);
        questionManager.displayQuestion(questionManager.currentIndex);
    }
};
request.open('GET', 'data/questions.json');
request.send();
