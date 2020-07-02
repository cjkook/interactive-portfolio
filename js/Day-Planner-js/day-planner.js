current = {
  day: "",
  month: "",
  ordinal: "",
  year: "",
  hour: "",
  minute: "",
  second: "",
  half: ""
};

dayEvents = [
  
]

buttons = [];

fnUpdateTime();

// build rows and columns
function fnBuild() {
  let numHours = 24;

  for (let i = 0; i <= numHours - 1; i++) {
    // jquery to add
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
        current.half = temp[1]
        temp = temp[0].split(":");
        current.hour = temp[0];
        current.minute = temp[1];
        current.second = temp[2];
        break;
    }
  });
  console.log(current)
}
