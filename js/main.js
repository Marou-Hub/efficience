function displayAll() {
    var elements = document.getElementsByClassName("quiz");
    for(var i=0; i < elements.length; i++)
        elements[i].style.display = "none";
};

function start() {
    displayAll();
    document.getElementById("question1").style.display = "block";
};

function nextQuestion(i) {
    displayAll();
    document.getElementById("question"+i).style.display = "block";
};

function answer(i) {
    displayAll();
    document.getElementById("answer"+i).style.display = "block";
};

