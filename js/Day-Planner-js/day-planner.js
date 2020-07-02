current = {
  day: "",
  month: "",
  ordinal: "",
  year: "",
  hour: "",
  minute: "",
  second: "",
  half: "",
};

dayEvents = [];

buttons = [];

fnUpdateTime();
fnBuild();

// build rows and columns
function fnBuild() {
  let rowFunctions = [
    function (h, c) {
      h < 12 ? c.text(h + ":00 AM") : c.text(h + ":00 PM");
      c.attr("id", `item-${h}`);
    },
    function (h, c) {
      // ! get appointment from localstorage by hour

      // create edit area
      let textArea = $("<input>");

      // color row
      if (i == current.hour) {
      } else {
      }
    },
    function (h, c) {
      // ! notes
    },
    function (h, c) {
      // ! save button
      let btn = $("<button>");
      btn.addClass("");
      btn.attr(`save-${h}`);
      btn.text("Save");
    },
  ];
  let colHeadings = ["Hour","Appointment","Notes","Save"]
  let numHours = 24;

  // table header
  let tableHead = $("<div>");
  tableHead.addClass("table-header");
  colHeadings.forEach(function (head) {
    let col = $("<div>");
    col.addClass("table-header-col");
    col.text(head);
  });

  // create rows
  for (let i = 0; i <= numHours - 1; i++) {
    let row = $("<div>");
    row.addClass("row");
    row.attr("id", i);

    // coloring
    if (i >= 9 || i <= 17) {
      row.addClass("row-business");
    }
    if (i == current.hour) {
      row.addClass("row-current");
    }

    // add different types of info to each column
    rowFunctions.forEach(function (func, index) {
      let col = $("<div>");
      col.addClass("col-sm-3");
      func(i, col);
      row.append(col);
    });

    // add rows
    $("#hourBlockArea").append(row);

    // let newBtn = $("<button>");
    // newBtn.addClass("letter-button letter letter-button-color");
    // newBtn.attr("data-letter", `${letters[i]}`);
    // newBtn.text(letters[i]);
    // $("#buttons").append(newBtn);
    // <div class="row">
    //   <div class="col-sm-3">${current.hour}${current.half}</div>
    //   <div class="col-sm-3" id=${i+1}>test</div>
    //   <div class="col-sm-3">test</div>
    //   <div class="col-sm-3">test</div>
    // </div>;
  }
}

// periodically updates time
function fnUpdateTime() {
  let now = moment().format("dddd, MMMM Do YYYY, hh:mm:ss a");
  now = now.split(",");

  // format and add to object
  now.forEach(function (item, i) {
    let temp;
    switch (i) {
      case 0:
        current.day = item;
        break;
      case 1:
        temp = now[i].split(" ");
        temp.shift();
        current.month = temp[0];
        current.ordinal = temp[1];
        current.year = temp[2];
        break;
      case 2:
        temp = now[i].split(" ");
        temp.shift();
        current.half = temp[1];
        temp = temp[0].split(":");
        current.hour = temp[0];
        current.minute = temp[1];
        current.second = temp[2];
        break;
    }
  });
  console.log(current);
}
