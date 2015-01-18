Meteor.startup(function () {
	Template.home.helpers({
    loc: function () {
      // return 0, 0 if the location isn't ready
      var loc_a = Geolocation.latLng() || { lat: 0, lng: 0 };
      
      return loc_a
      

    },
    error: Geolocation.error
  });
});