let qArea = document.getElementById("qArea");
let qTitle = document.getElementById("qTitle");
let qIndex = 0;
var questions = [
  {
    title: "W-W-What?",
    answers: [
      "Wacky World of Waldos",
      "Weird Wyvern Wonder",
      "World Wide Web",
      "World Wide Weekend",
    ],
    correct: "World Wide Web",
    qText: "In a website browser address bar, what does “www” stand for?",
    category: ["Technology"],
    hint: "A spider makes them.",
  },
  {
    title: "Sneaking A Sneaker In",
    answers: ["1992", "1984", "1999", "1983"],
    correct: "1984",
    qText: "In what year were the first Air Jordan sneakers released?",
    category: ["Pop Culture"],
    hint: "An Orwellian year.",
  },
  {
    title: "The First Woman on Earth",
    answers: ["Cleopatra", "Helen", "Pandora", "Irene"],
    correct: "Pandora",
    qText: "According to Greek mythology who was the first woman on earth?",
    category: ["Mythology"],
    hint: "Think online radio.",
  },
  {
    title: "",
    answers: ["", "", "", ""],
    correct: "",
    qText: "",
    category: [""],
    hint: "",
  },
];
fnPageSetup();


// initialize all fields
function fnPageSetup() {
  // question area
  let startBtn = document.createElement("button");
  startBtn.setAttribute("class", "btn btn-success");
  startBtn.setAttribute("id", "start");
  startBtn.textContent = "Start";
  qArea.appendChild(startBtn)
  startBtn = document.getElementById("start");
  startBtn.addEventListener("click", fnStart);

  fnUpdateChart(); // update chart
}

// start quiz
function fnStart(event) {
  event.preventDefault();

  // shuffle question objects
  for (let i = questions.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    const temp = questions[i];
    questions[i] = questions[j];
    questions[j] = temp;
  }

  console.log(questions);
  // Update cards to start
  console.log('hit')
  fnUpdateCards('start')
}

// choose answer
// bubble up delegation
function fnAnswer() {
  // find element to delegate from
  //
}

// update chart from stored data
function fnUpdateChart() {
  // set local data or use default
  
}

function fnUpdateCards(state) {
  switch(state) {
    case 'start':
      let cardText = ""
      qIndex = 0
      // set qArea and qTitle
      qTitle.textContent = questions[qIndex].title

      cardText = questions[qIndex].qText
      cardText += "<ul>"
      questions[qIndex].answers.forEach(ans => cardText += `<li>${ans}</li>`) 
      cardText += "</ul>"
      qArea.innerHTML = cardText

      // set hint text
      console.log(cardText)
      break

    case 'next':
      break

    case 'end':
      break
  }
}

function fnHint() {
  // change text
  // reveal card
}
