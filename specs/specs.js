describe('Places', function() {
  it("creates a new place with the given properties", function() {
    var testPlace = new Places("South America", "Peru", "Macchu Pichu", 2015, "Humid");
    expect(testPlace.placeName).to.equal("South America");
    expect(testPlace.countryName).to.equal("Peru");
    expect(testPlace.landmarkName).to.equal("Macchu Pichu");
    expect(testPlace.year).to.equal(2015);
    expect(testPlace.notes).to.equal("Humid");
  });


  // it("adds the fullName method to a contact", function() {
  //   var testPlace = new Places("South America", "Peru", "Macchu Pichu", 2015, "Humid");
  //   expect(testPlace.fullPlaceName()).to.equal("South America Peru Macchu Pichu 2015 Humid");
  // });
});
