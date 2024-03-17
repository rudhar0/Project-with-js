
function success(position) {
    console.log(position);
  }

  function error() {
    console.log('Geolocation error!');
  }

function getLocation() {
    let locationbutuon = document.querySelector(".Auto-location-btn")

    if (!navigator.geolocation) {
      console.log('Geolocation API not supported by this browser.');
    } else {
      console.log('Checking location...');
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }