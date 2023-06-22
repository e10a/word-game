const letterCounts: Array<{ name: string; count: number }> = [
  {
    name: "a",
    count: 9
  },
  {
    name: "b",
    count: 2
  },
  {
    name: "c",
    count: 2
  },
  {
    name: "d",
    count: 4
  },
  {
    name: "e",
    count: 12
  },
  {
    name: "f",
    count: 2
  },
  {
    name: "g",
    count: 3
  },
  {
    name: "h",
    count: 2
  },
  {
    name: "i",
    count: 9
  },
  {
    name: "j",
    count: 1
  },
  {
    name: "k",
    count: 1
  },
  {
    name: "l",
    count: 4
  },
  {
    name: "m",
    count: 2
  },
  {
    name: "n",
    count: 6
  },
  {
    name: "o",
    count: 8
  },
  {
    name: "p",
    count: 2
  },
  {
    name: "q",
    count: 1
  },
  {
    name: "r",
    count: 6
  },
  {
    name: "s",
    count: 4
  },
  {
    name: "t",
    count: 15
  },
  {
    name: "u",
    count: 6
  },
  {
    name: "v",
    count: 4
  },
  {
    name: "w",
    count: 2
  },
  {
    name: "x",
    count: 1
  },
  {
    name: "y",
    count: 2
  },
  {
    name: "z",
    count: 1
  },
  {
    name: "blank",
    count: 2
  }
];
const letterPoints: Array<{ points: number; names: string[] }> = [
  {
    points: 0,
    names: ["blank"]
  },
  {
    points: 1,
    names: ["e", "a", "i", "o", "n", "r", "t", "l", "s", "u"]
  },
  {
    points: 2,
    names: ["d", "g"]
  },
  {
    points: 3,
    names: ["b", "c", "m", "p"]
  },
  {
    points: 4,
    names: ["f", "h", "v", "w", "y"]
  },
  {
    points: 5,
    names: ["k"]
  },
  {
    points: 8,
    names: ["j", "x"]
  },
  {
    points: 10,
    names: ["q", "z"]
  }
];
const letters: Array<{ name: string; points: number }> = [];

// console.log(letterCounts)

function compileLitterBag() {
  assignLetterPoints();

  applyLetterCounts();

  // sortLetters
  letters.sort((a, b) => a.name.localeCompare(b.name));
  // console.log(letters);

  //check letter countsList
  // letters.forEach()
}

function assignLetterPoints() {
  for (var item of letterPoints) {
    // console.log(item);
    for (var letter of item.names) {
      letters.push({
        name: letter,
        points: item.points
      });
    }
  }
  // console.log(letters)
}
function applyLetterCounts() {
  for (var item of letterCounts) {
    if (item.count === 1) return;

    let matchedLetter = letters.find((key) => key.name === item.name);

    if (!matchedLetter) return;

    console.log(matchedLetter);

    // let i = item.count

    // while (i > 1) {
    //     letters.push(matchedLetter)
    //     i--;
    // }
  }
}

compileLitterBag();
// console.log(getLetters())
