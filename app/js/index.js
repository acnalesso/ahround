$(function() {

  function getAddress(lat, long){
    $.ajax({
      url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long
    }).done(function(response){
      $(".target").append('<p><h3>'+response.results[2].formatted_address.split(' ')[1]+ '<strong>'+ response.results[0].formatted_address +'<strong></h3></p><br />');
    });
  }

  var cache = {};

  setInterval(function() {
    navigator.geolocation.getCurrentPosition(function(position) {

      if(cache.lat !== position.coords.latitude && cache.lon !== position.coords.longitude){
        getAddress(position.coords.latitude, position.coords.longitude);
        cache.lat = position.coords.latitude
        cache.lon = position.coords.longitude
        var time_now = new Date();
        $('.address').text('Lat or Lon has been changed :) it is: lat: ' + cache.lat + ', long: '+ cache.lon + ' at: ' + time_now );
      } else {
        $('.info, title').html('Nothing :)');
      }

    });
  }, 2000);

});
