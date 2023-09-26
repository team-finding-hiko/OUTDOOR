const API_KEY = "2d1a26f7f6dfeed710ece8df6e238e60";
const CITY_NAME = "Tokyo";

$(function () {
  $.ajax({
    url:
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      CITY_NAME +
      "&units=metric&appid=" +
      API_KEY,
    dataType: "json",
    type: "GET",
  })
    .done(function (data) {
      // 呼び出した時の処理
      console.log(data.weather[0].description);
    })

    .fail(function (data) {
      console.log("現在の天気を取得できませんでした。");
    });
});
