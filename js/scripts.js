function Places(continent, country, landmarks, year, notes) {
  this.continent = continent;
  this.country = country;
  this.landmarks = landmarks;
  this.year = year;
  this.notes = notes;
}


Places.prototype.fullPlaceName = function() {
  return this.continent;
};

$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var continent = $("input#new-continent-name").val();
    var country = $("input#new-country-name").val();
    var landmarks = $("input#new-landmark-name").val();
    var year = parseInt($("input#new-year-name").val());
    var notes = $("input#new-notes-name").val();
    var newPlace = new Places (continent, country, landmarks, year, notes);

    $("ul#places").append("<li><span class='places'>" + newPlace.fullPlaceName() + "</span></li>");

    $("input#new-continent-name").val("");
    $("input#new-country-name").val("");
    $("input#new-landmark-name").val("");
    $("input#new-year-name").val();
    $("input#new-notes-name").val("");


    $(".places").last().click(function() {
      $("#show-places").show();
      $("#show-places h2").text(newPlace.fullPlaceName());
      $(".continent").text(newPlace.continent);
      $(".country").text(newPlace.country);
      $(".landmarks").text(newPlace.landmarks);
      $(".year").text(newPlace.year);
      $(".notes").text(newPlace.notes);
    });
  });
});
