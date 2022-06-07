const quizButton = document.getElementById("quiz");
const quizForm = document.getElementById("formContainer");
const enterButton = document.getElementById("toSite");
const submitButton = document.getElementById("submit")

quizButton.addEventListener('click', takeQuiz);
submitButton.addEventListener('click', submit);


console.log(quizButton);
console.log(quizForm);
console.log(enterButton);



setTimeout(function(){
    document.getElementById("song").play();
    console.log('audio started');
  }, 2000)

function takeQuiz() {
    quizForm.style.display = 'flex';
}

function submit() {
    try {
        const selection = document.querySelector('input[name="guess"]:checked').value;

        if (selection == "correct") {
            quizForm.style.display = 'none';
            document.querySelector('input[name="guess"]:checked').checked = false;
            enterButton.style.display = 'block';
        }
        if (selection == "incorrect") {
            alert("Wrong");
            quizForm.style.display = 'none';
            document.querySelector('input[name="guess"]:checked').checked = false;
        }
    } catch(e) {
            alert("Hey genius..pick one!");
    }
}



