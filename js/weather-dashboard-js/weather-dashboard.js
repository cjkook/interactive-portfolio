let localCities = JSON.parse(localStorage.getItem("quizData")) || [
  "denver",
  "albuquerque",
  "new york",
];

let lastCityClicked = "";
let dataTypeQuery = "Current";
fnBuild();

function fnBuild() {
  // build skeleton
  let searchRow = $("<div class='row fluid'>");
  let row = $("<div class='row'>");

  // search row items
  let cityText = $("<input id='addText' style='margin: 10px;'>");
  let citySearch = $("<button class='btn btn-warning' id='Add'>");
  let currentBtn = $("<button class='btn btn-success' id='Current'>");
  let futureBtn = $("<button class='btn btn-secondary' id ='Future'>");
  let slider = $(
    "<input type='range' class='custom-range' id='lengthSlider' min='2' max='16' value='5'>"
  );
  citySearch.text("Add");
  currentBtn.text("Current");
  futureBtn.text("Future");
  // <input type="range" class="custom-range" id="lengthSlider" min="8" max="128" value="10" />
  // <span class="settings-menu" id="lengthInt">0</span>
  searchRow.append(cityText);
  searchRow.append(citySearch);
  searchRow.append(currentBtn);
  searchRow.append(futureBtn);
  searchRow.append(slider);
  $("#content-area").append(searchRow);

  // city column
  let col = $("<div id='cityList'>").addClass("col-md-3");
  let infoPanel = $("<div id='infoPanel'>").addClass("col-md-5");

  row.append(col);
  row.append(infoPanel);
  $("#content-area").append(row);

  let subRow = $("<div id='cities-col' class='btn-group-vertical'>");
  subRow.attr("style", "padding: 10px; margin: 10px;");
  col.append(subRow);

  // build rows based on localstorage and API data
  fnBuildCityList();
}

// make saved city list
function fnBuildCityList() {
  localCities.forEach(function (entry, i) {
    let btn = $("<button class='btn btn-primary'>");
    btn.text(entry);
    btn.attr("data-name", entry);
    $("#cities-col").append(btn);
  });
}

// button events
$("button").on("click", function () {
  console.log("click");
  // catch all existing cities
  if ($(this).hasClass("btn-primary")) {
    lastCityClicked = $(this).attr("data-name");
    console.log(lastCityClicked);
    dataTypeQuery = "Current";
    fnAJAX(lastCityClicked, dataTypeQuery);
  } else if ($("#Add")) {
    // change data query
    dataTypeQuery = $(this).text();

    switch (dataTypeQuery) {
      case "Add":
        let newCity = $("#addText").val();
        fnAJAX(newCity, "Add");

        localCities.push(newCity);
        lastCityClicked = newCity;

        $("#cities-col").empty();
        fnBuildCityList();
        break;
      case "Current":
        fnAJAX(lastCityClicked, dataTypeQuery);
        break;

      case "Future":
        fnAJAX(lastCityClicked, dataTypeQuery);
        break;
    }
  }
});

function fnAJAX(city, format) {
  let apiKey = "a3325dbe8851063418f38285481e3fa5";
  console.log(city, format);
  let urlQuery;
  switch (format) {
    case "Current":
    case "Add":
      urlQuery = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
      break;
    case "Future":
      urlQuery = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;
      break;
  }

  $("#infoPanel").empty();
  $.ajax({
    url: urlQuery,
    method: "GET",
  }).then(function (res) {
    let panel = $("#infoPanel");
    console.log(res);

    switch (format) {
      case "Add":
      case "Current":
        // build info panel
        let card = $("<div class='card'>");

        // title
        let cardTitle = $("<div class='card-header'>");
        cardTitle.text(res.name);

        // weather data
        let cardBody = $("<div class='card-body'>");
        let cardBodyText = `<ul class="list-group list-group-flush">
    <li class="list-group-item">Temperature: ${res.main.temp}</li>
    <li class="list-group-item">Feels Like: ${res.main.feels_like}</li>
    <li class="list-group-item">Humidity: ${res.main.humidity}%</li>
    <li class="list-group-item">
    Weather: ${res.weather[0].description}
    <img src="http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png"/>
    </li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>`;
        cardBody.html(cardBodyText);
        card.append(cardTitle);
        card.append(cardBody);
        panel.append(card);
        break;
      case "Future": // build multiple cards
        let row = $("<div class='row fluid'>");
        for (let i = 0; i <= res.list.length; i += 8) {
          let txt;
          // build each card
          let card = $("<div class='card'>");
          // title/date
          let cardTitle = $("<div class='card-header'>");
          txt = res.list[i].dt_txt.split(" ");
          cardTitle.text(txt[0]);

          // weather data
          let cardBody = $("<div class='card-body'>");
          let cardBodyText = `<ul class="list-group list-group-flush">
    <li class="list-group-item">Temperature: ${res.list[i].main.temp}</li>
    <li class="list-group-item">Feels Like: ${res.list[i].main.feels_like}</li>
    <li class="list-group-item">
    Weather: ${res.list[i].weather[0].description}
    <img src="http://openweathermap.org/img/wn/${res.list[i].weather[0].icon}@2x.png"/>
    </li>
  </ul>`;
          cardBody.html(cardBodyText);
          card.append(cardTitle);
          card.append(cardBody);
          row.append(card)
          panel.append(card);
        }
        break;
    }
  });
}
