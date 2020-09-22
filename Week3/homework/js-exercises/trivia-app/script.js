'use strict';

// all necessary DOM elements
const mainContainer = document.createElement('div');
mainContainer.className = 'container';
document.body.appendChild(mainContainer);

const pageTitle = document.createElement('h1');
pageTitle.textContent = "Let's play some Trivia!";

const description = document.createElement('p');
description.textContent =
  'Try your best to figure out the answer.If you really have no clue, click on the question to reveal the answer...';

const wrapForQuestion = document.createElement('div');
wrapForQuestion.className = 'list-container';

const listQuestions = document.createElement('ul');
listQuestions.className = 'list';

mainContainer.append(pageTitle, description, wrapForQuestion);
wrapForQuestion.appendChild(listQuestions);
// decoding HTML entities
function decodingHtmlElem(data) {
  const content = document.createElement('textarea');
  content.innerHTML = data;
  return content.value;
}
// decoding HTML entities
function htmlEntities(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
// get questions and answers
async function getRandomQuestions(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(response);
    // loop throw json object and get a data for questions and answers
    data.results.forEach(element => {
      console.log(element);
      const li = document.createElement('li');
      li.className = 'list-element';
      listQuestions.appendChild(li);
      const textQuestion = document.createElement('div');
      textQuestion.className = 'question-text';
      textQuestion.textContent = htmlEntities(element.question);
      const answer = document.createElement('div');
      answer.className = 'right-answer';
      answer.textContent = decodingHtmlElem(element.correct_answer);
      li.append(textQuestion, answer);
      // show/hide answer after push the question element
      textQuestion.addEventListener('click', () => {
        if (answer.style.display === 'block') {
          answer.style.display = 'none';
        } else {
          answer.style.display = 'block';
        }
      });
    });
  } catch (err) {
    console.log(err);
  }
}
getRandomQuestions('https://opentdb.com/api.php?amount=5');
