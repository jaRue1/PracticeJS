let vibe = {
  Album: "Astro World",
  Artist: "Travis Scott",
  id       : 5566,
  catalog : function() {
    return this.Album + " " + this.Artist;
  }
};
console.log(vibe.catalog()) // Astro World Travis Scott