const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");

const getInfo = async (e) => {
  e.preventDefault();
  let cityVal = cityName.value;

  if (cityVal === "") {
    city_name.innerHTML = `plz write name`;
    city_name.innerHTML = "";
    document.getElementById("temp").innerText = 0;
  } else {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=da865e49167acd2ec1703203f869181a`;
      const resp = await fetch(url);
      const data = await resp.json(resp);
      const arrData = [data];
      console.log(arrData[0].name + " ," + arrData[0].sys.country);
      city_name.innerHTML = arrData[0].name + " ," + arrData[0].sys.country;
      document.getElementById("temp").innerText = arrData[0].main.temp;
    } catch {
      city_name.innerHTML = `plz enter proper city name`;
      city_name.innerHTML = "";
      document.getElementById("temp").innerText = 0;
    }
  }
};
submitBtn.addEventListener("click", getInfo);
