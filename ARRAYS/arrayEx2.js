// create an array of objects
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

for (let i = 0; i < nbaRoster.length; i++) {
  const element = nbaRoster[i].playerName
  let counter = i + 1
  console.log("Player # " + counter + " Name is  " + element)
  // console.log(nbaRoster[i])
}
