function GeoOk() {}

function GeoError() {}

navigator.geolocation.getCurrentPosition(GeoOk, GeoError);
