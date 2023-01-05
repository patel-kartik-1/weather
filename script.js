const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "04e6c55f38msh2a92d3fdb7ae683p16236djsnbabc2172d8bb",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const selector=(city)=>{
  getwather(section.value);

}
const getwather = (city) => {
  cityname.innerHTML=city;
  // citynam.innerHTML=city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
    })
    .catch((err) => console.error(err));
};

// getwather("ahmedabad");
getwather("delhi");

submit.addEventListener("click", (k) => {
  k.preventDefault();
  getwather(citys.value);
});
