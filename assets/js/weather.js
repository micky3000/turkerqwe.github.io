const url = 'https://api.openweathermap.org/data/2.5/'
const key = '739ef515e3ade2c79525a82f51f458a5'
const cityName = 'Izmir'

$.getJSON(`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`, function(data) {
    $("#weather").html(`<i class="fa-regular fa-cloud-bolt-sun text-gray-500 inline-flex ml-1 mr-2"></i><span class="text-capitalize">${data.weather[0].description}</span>`);
});