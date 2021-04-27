 const nbaRoster = [
  {
    playerTeam: "Lakers",
    playerName: "Lebron James",
    playerHeight: "6'8",
    playerWeight: "240lbs",
    playerPos: "SF",
  },
  {
    playerTeam: "Nets",
    playerName: "Kevin Durant",
    playerHeight: "6'11",
    playerWeight: "230lbs",
    playerPos: "SF",
  },
  {
    playerTeam: "Clippers",
    playerName: "Paul George",
    playerHeight: "6'8",
    playerWeight: "225lbs",
    playerPos: "SF",
  },
  {
    playerTeam: "Trailblazer",
    playerName: "Damian Lilard",
    playerHeight: "6'2",
    playerWeight: "200lbs",
    playerPos: "PG",
  },
]
nbaRoster.reverse() // reverses the order of the array
nbaRoster.forEach(player => {
  console.log(player.playerName) 
});
// Output
// Damian Lilard
// Paul George
// Kevin Durant
// Lebron James