let qArea = document.getElementById("qArea");
let qTitle = document.getElementById("qTitle");
let qHintText = document.getElementById("hintText");
let qTimeText = document.getElementById("timeText");
let startBtn;
let nextBtn;
let endBtn;
let hintBtn;
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
let quizTime = questions.length * 5;
var ctx = document.getElementById("scoreChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Technology", "Pop Culture", "Mythology", "Thursday", "Friday"],
    datasets: [
      {
        label: "Incorrect",
        data: [0, 0, 0, 0, 0],
        backgroundColor: window.chartColors.danger,
        borderColor: "transparent",
      },
      {
        label: "Correct",
        data: [0, 0, 0, 0, 0],
        backgroundColor: window.chartColors.primary,
        borderColor: "transparent",
      },
      {
        label: "Hint Used",
        data: [0, 0, 0, 0, 0],
        backgroundColor: window.chartColors.warning,
        borderColor: "transparent",
      },
    ],
  },
  options: {
    legend: {
      display: true,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

fnPageSetup();

// initialize all fields
function fnPageSetup() {
  //start button
  startBtn = document.createElement("button");
  startBtn.setAttribute("class", "btn btn-success");
  startBtn.setAttribute("id", "start");
  startBtn.textContent = "Start";
  btnArea.appendChild(startBtn);
  startBtn = document.getElementById("start");
  startBtn.addEventListener("click", fnUpdateCards);

  // next button
  nextBtn = document.createElement("button");
  nextBtn.setAttribute("class", "btn btn-success");
  nextBtn.setAttribute("id", "next");
  nextBtn.setAttribute("style", "display: none;");
  nextBtn.textContent = "Next";
  btnArea.appendChild(nextBtn);
  nextBtn = document.getElementById("next");
  nextBtn.addEventListener("click", fnUpdateCards);

  // end button
  endBtn = document.createElement("button");
  endBtn.setAttribute("class", "btn btn-success");
  endBtn.setAttribute("id", "end");
  endBtn.setAttribute("style", "display: none;");
  endBtn.textContent = "End";
  btnArea.appendChild(endBtn);
  endBtn = document.getElementById("end");
  endBtn.addEventListener("click", fnUpdateCards);

  // hint button
  hintBtn = document.getElementById("hint");
  hintBtn.addEventListener("click", fnUpdateCards);

  fnUpdateChart(); // update chart
}

// create answer radio group
function fnCreateRadio() {
  let text = "<br><form id='ansRadio'>";

  questions[qIndex].answers.forEach(function (ans, i) {
    console.log(ans, i);
    text += `<input type="radio" name="answers" id=${i}><label for="${i}">${questions[qIndex].answers[i]}</label><br>`;
  });

  return text;
}

function fnCreateQuestion() {
  let cardText = "";

  // set qTitle
  qTitle.textContent = questions[qIndex].title;

  // set question text
  cardText = questions[qIndex].qText;

  // create radio group
  cardText += fnCreateRadio();
  qArea.innerHTML = cardText;

  // button visibility
  nextBtn.setAttribute("style", "display:block;");
  startBtn.setAttribute("style", "display:none;");
  endBtn.setAttribute("style", "display:none;");
  qHintText.setAttribute("style", "display:none;");

  // set hint text
  qHintText.textContent = questions[qIndex].hint;
}

function fnUpdateCards(event) {
  event.preventDefault();
  let state = event.srcElement.id;
  console.log(event);

  switch (state) {
    case "start":
      qIndex = 0;
      quizTime = questions.length * 5;

      // shuffle question objects
      for (let i = questions.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        const temp = questions[i];
        questions[i] = questions[j];
        questions[j] = temp;
      }

      fnCreateQuestion();
      startTimer()
      break;

    case "next":
      console.log("next");
      let col = [...document.getElementById("ansRadio").children];
      let ansBank = [];
      let result;

      // check ansRadio
      col.forEach(function (ans, i) {
        if (ans.matches("label")) ansBank.push(ans);
      });
      col.forEach(function (ans, i) {
        if (ans.matches("input") && ans.checked) {
          if (ansBank[ans.id].textContent == questions[qIndex].correct) {
            result = 1;
          } else {
            result = 0;
          }
        } else {
          // todo : please select an answer
        }
      });

      // update data objects and charts
      myChart.data.labels.forEach(function (match, i) {
        for (let j = 0; j <= questions[qIndex].category.length; j++) {
          if (questions[qIndex].category[j] === match) {
            myChart.data.datasets[result].data[i]++;
            console.log(myChart.data.datasets);
            fnUpdateChart();
          }
        }
      });

      // update question index & cards
      if (result === undefined) {
        // todo : please select an answer
      } else {
        qIndex++;
        qIndex >= questions.length ? (qIndex = 0) : 0;
        fnCreateQuestion();
      }

      break;

    case "end":
      console.log("end");
      break;

    case "hint":
      qHintText.setAttribute("style", "display: block;");

      // update data objects and charts
      myChart.data.labels.forEach(function (match, i) {
        for (let j = 0; j <= questions[qIndex].category.length; j++) {
          if (questions[qIndex].category[j] === match) {
            myChart.data.datasets[2].data[i]++;
            fnUpdateChart();
          }
        }
      });
  }
}

function fnEnd() {
  // button visibility
  nextBtn.setAttribute("style", "display:none;");
  startBtn.setAttribute("style", "display:block;");
  startBtn.innerHTML = "Try Again"
  endBtn.setAttribute("style", "display:none;");
  qHintText.setAttribute("style", "display:block;");
  qTitle.textContent = "!!!!!!!";
  qArea.innerHTML = "<h2>You ran out of time!</h2>"
}

// update chart from stored data
function fnUpdateChart() {
  // set local data or use default

  myChart.update(); // update visuals
}

// timer
function startTimer() {
  // time based on number of questions

  var timerInterval = setInterval(function() {
    quizTime--;
    qTimeText.textContent = quizTime + " seconds left till colorsplosion.";

    if(quizTime === 0) {
      clearInterval(timerInterval);
      fnEnd()
    }

  }, 1000);
}
