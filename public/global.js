var question = document.getElementsByClassName("question");
var total_right = 0;
var current_question = 0;
var question_result = document.getElementById("question_result");


var given_answer = function(){
  var answer = document.getElementById("a" +(current_question +1));
  return answer.value;
}

var is_correct_answer = function(answer_text,correct_answer){
  if (answer_text==correct_answer)
    {
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

var right_answer = function(){
  var selecter = document.getElementById("a" +(current_question +1));
  var thenumber = selecter.getAttribute('data-correct');
 return thenumber;
}
var process_answer_submission = function(){
  var user_answer = given_answer();
  var good_answer = right_answer();
  update_question_result(is_correct_answer(user_answer, good_answer));
}
// element.addEventListener(‘click’, handler);

var submitter = document.getElementById("submitter");
submitter.addEventListener('click', process_answer_submission);

var next = document.getElementById("next");
next.addEventListener('click', next_question);
