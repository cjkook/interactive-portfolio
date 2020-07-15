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

let numHours = 24;
events = {};

buttons = [];

fnUpdateTime();
fnBuild();

// function to save row items
function fnSave(hour) {
  events[`appt-${hour}`] = $(`#appt-${hour}`).val();
  events[`appt-notes-${hour}`] = $(`#appt-notes-${hour}`).val();
  console.log(events);
  localStorage.setItem("dayPlan", JSON.stringify(events));
}

// function to clear row items
function fnClear(hour) {
  events[`appt-${hour}`] = '';
  events[`appt-notes-${hour}`] = ''
  $(`#appt-${hour}`).text('')
  $(`#appt-notes-${hour}`).text('')
  localStorage.setItem("dayPlan", JSON.stringify(events));
}

// build rows and columns
function fnBuild() {
  events = JSON.parse(localStorage.getItem("dayPlan")) || {};
  console.log(events);
  let rowFunctions = [
    function (h, c) {
      h < 12 ? c.text(h + ":00 AM") : c.text(h + ":00 PM");
      c.attr("id", `item-${h}`);
    },
    function (h, c) {
      // appointment name
      // create edit area
      let textArea = $(`<textarea id="appt-${h}">`);
      c.append(textArea);
      // ! get appointment from localstorage by hour
      if (events[`appt-${h}`] != undefined)
        textArea.text(`${events[`appt-${h}`]}`);
    },
    function (h, c) {
      // notes
      // create edit area
      let textArea = $(`<textarea id="appt-notes-${h}">`);
      c.append(textArea);
      // ! get appointment from localstorage by hour
      if (events[`appt-notes-${h}`] != undefined)
        textArea.text(`${events[`appt-notes-${h}`]}`);
    },
    function (h, c) {
      // save button
      let btn = $("<button>");
      btn.addClass("saveBtn");
      btn.attr("id", `save-${h}`);
      btn.text("Save");
      let btn1 = $("<button>");
      btn1.addClass("clearBtn");
      btn1.attr("id", `clear-${h}`);
      btn1.text("Clear");
      c.append(btn);
      c.append(btn1);

      // buttons events
    },
  ];
  let colHeadings = ["Hour", "Appointment", "Notes", "Save"];

  // table header
  let table = $("<table>");
  table.addClass("table table-dark");
  colHeadings.forEach(function (head) {
    let col = $("<th>");
    col.addClass("thead-dark");
    col.text(head);
    table.append(col);
  });
  $("#hourBlockArea").append(table);

  // create rows
  for (let i = 0; i <= numHours - 1; i++) {
    let row = $("<tr>");
    row.addClass("row");
    row.attr("id", i);

    // coloring
    if (i >= 9 && i <= 17) {
      row.addClass("row-business");
    }
    if (i == current.hour) {
      row.addClass("row-current");
    } else if (i < current.hour && i >= 9) {
      row.addClass("row-prev-business");
    }

    // add different types of info to each column
    rowFunctions.forEach(function (func, index) {
      let col = $("<td>");
      col.addClass("col-sm-3");
      func(i, col);
      row.append(col);
    });

    // add rows
    $("#hourBlockArea").append(row);
  }

  // button events
  $("button").on("click", function () {
    let type = $(this).hasClass("saveBtn") ? "save" : "clear";
    let h = $(this)
      .attr("id")
      .replace(type + "-", "");

    if (type === "save") fnSave(h);
    if (type === "clear") fnClear(h);
  });
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

  $("#day-title").text(`${current.day}, ${current.month} ${current.ordinal}`);
}
