
let amatureFighterArr = [
  {
    id: 1,
    name: "Kevin Soltero",
    dob: "5/27/2005",
    ringName: null,
    weightClass: "107lbs",
    imageUrl: "kevinSoltero.jpeg",
    homeTown: "Kansas City, MO",
    favColor: "Black",
    favSong: "El Karma by Ariel Camacho",
    favMovie: "Ford vs Ferrari",
    threeWords: "Dedicated, Athletic, and Chill",
    favQuote:
      "I hated every minute of traning, but I said, don't quit. Suffer now and live the rest of your life a Champion.",
    boxingGoals: [
      "Get in Shape",
      "Win a couple Tournaments",
      "Become a World Champion",
    ],
  },
  {
    id: 2,
    name: "Lex-Xavier Oliver",
    dob: "02/04/1999",
    ringName: null,
    weightClass: "Heavy Weight",
    imageUrl: "lex-xavierOliver.jpeg",
    homeTown: "Kansas City, MO",
    favColor: "Blue",
    favSong: "Shine by Meek-Mill",
    favMovie: null,
    threeWords: "Dedicated, Hard Worker, and Funny",
    favQuote: "Shoulders back, chin up.",
    boxingGoals: ["Become a World Champion"],
  },
];


const removeNullArrObjValues = (arr) => {
  for (obj of arr) {
    for (const [key, value] of Object.entries(obj)) {

      if (value === null) {
        delete obj[key];
      }

    }
  }
  return arr;
};
console.log(removeNullArrObjValues(amatureFighterArr));







