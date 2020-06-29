let startBtn;
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
fnStart();

// initialize all fields
function fnPageSetup() {
  // question area
  // todo create start button, then add to card
  startBtn = document.getElementById("start");
  startBtn.addEventListener("click", fnStart);
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
}

// choose answer
// bubble up delegation
function fnAnswer() {}

// update chart from stored data
function fnUpdateChart() {}

function fnUpdateCards(state) {}

function fnHint() {
  // change text
  // reveal card
}
