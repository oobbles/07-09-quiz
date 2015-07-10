var question = document.getElementsByClassName("question");

var total_right = 0;

var current_question = 0;

var question_result = document.getElementById("question_result");
var correct_answers =[1, 1, 1]
// var question = document.getElementById("question");
// question.innerText = questions[current_question].question;

// var choices = document.getElementById("choices");
// choices.innerText=questions[current_question].choice1 + ", " + questions[current_question].choice2 + ", " + questions[current_question].choice3;

var answer = document.getElementById("answer");
var given_answer = function(){
  return answer.value;
}
var is_correct_answer = function(answer_text){
  if (answer_text==correct_answers[current_question]){
  total_right++;
  return true;
  }
  else {
    return false;
  }
}
var next_question = function(){
  if(current_question == question.length-1){
    question_result.innerHTML="<h6>Final Right: " + total_right+"</h6>";

  }

  else{
    var current_question_id= current_question +1;
    var next_question_id = current_question_id + 1;
    current_question++;
    question_result.innerText ="";
    document.getElementById("q" + current_question_id).className="question";
    document.getElementById("q" + next_question_id).className="question show";
    }
  }



var update_question_result = function(correct){
  if (correct==true){
    question_result.innerText = "Success!";
  }
  else {
    question_result.innerText = "Wrong!";
  }
}

var process_answer_submission = function(){
  var user_answer = given_answer();
  update_question_result(is_correct_answer(user_answer));
}
// element.addEventListener(‘click’, handler);

var submitter = document.getElementById("submitter");
submitter.addEventListener('click', process_answer_submission);

var next = document.getElementById("next");
next.addEventListener('click', next_question);
