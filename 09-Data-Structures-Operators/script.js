'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// for (const [key, scorer] of game.scored.entries()) {
//   console.log(`Goal ${key + 1}: ${scorer}`);
// }
// const odds = Object.values(game.odds);
// let sum = 0;
// for (const value of odds) {
//   sum += value;
// }
// sum /= odds.length;
// console.log(sum);

// console.log(game[team]);
// const [players1, players2] = game.players;
// const [gk, ...fieldPlayers] = players1;
// const allPlayers = [...players1, ...players2];

// console.log(allPlayers);
// const players1Final = [...players1, 'Thiago', 'Couthino', 'Perisic'];
// console.log(players1Final);
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// function printGoals(...players) {
//   console.log(`${players.length} goals scored `);
// }

// printGoals(...game.scored);

// console.log(game.team1 || game.team2);

// const allAuthors = [];

// // for (let book of books) {
// // }

// for (const [id, author] of allAuthors.entries()) {
//   console.log(`${id + 1}. ${author}`);
// }

// const bookData = [
//   ['title', 'Computer Networking: A Top-Down Approach'],
//   ['author', ['James F. Kurose', 'Keith W. Ross']],
//   ['publisher', 'Addison Wesley'],
// ];

// // Do the rest
// const newBook = {
//   [bookData[0][0]]: bookData[0][1],
//   [bookData[1][0]]: [bookData[1][1]],
//   [bookData[2][0]]: bookData[2][1],
// };

// const pages = 880;

// const newBook2 = {
//   title: 'The C Programming Language',
//   author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
//   pages,
// };
// console.log(newBook2.pages);

// // function getFirstKeyword(book) {
// //   const first = books.keywords?.
// // }

// const entries = [];

// for( of ){

// }

// Object.entries(books[0].thirdParty.goodreads)
// for (x of Object.values(books[0].thirdParty.goodreads)){
//   entries.push(x[0])
// }

// const entries2 = Object.entries(books[0].thirdParty.goodreads)

// const allKeywords = [];
// const books = [];
// for (const book of books) {
//   allKeywords.push(...book.keywords);
// }
// const UniqueKeywords = new Set(allKeywords);
// UniqueKeywords.add('coding');
// UniqueKeywords.add('scince');
// console.log(UniqueKeywords);
// // UniqueKeywords.delete('coding');
// console.log(UniqueKeywords);

// const uniqueKeywordsArr = [...UniqueKeywords];
// console.log(uniqueKeywordsArr);
// UniqueKeywords.clear();

// const bookMap = new Map([
//   ['title', 'Clean Code'],
//   ['author', 'Robert C. Martin'],
// ]);

// console.log(bookMap);
// bookMap.set('Pages', 464);
// console.log(bookMap);
// console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);
// console.log(bookMap.size);
// console.log(bookMap.has('author'));

// const FirstBookMap = new Map([book[0]]);

// for (const [key, value] of FirstBookMap) {
//   console.log(`${key} by ${value}`);
// }

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// const events = new Set(gameEvents.values());
// const eventsArr = [...events];
// console.log(eventsArr);

// gameEvents.delete(64);
// console.log(gameEvents);

// for (const [key, value] of gameEvents) {
//   if (key < 45) {
//     console.log(`First Half ${key}: ${value}`);
//   } else {
//     console.log(`Second Half ${key}: ${value}`);
//   }
// }
// const quote =
//   'A computer once beat me at chess, but it was no match for me at kick boxing';

// console.log(quote.slice(27, 32));
// console.log(quote.slice(69));

// function isContributor(lastName) {
//   if (author.indexOf('Contributor')) return true;
//   else return false;
// }

// const announcement = 'All passangers come to door Boarding door 23';
// console.log(announcement.replaceAll('door', 'gate'));

// const normalizeAuthorName = function (author) {
//   const lowerName = author.toLowerCase().trim();
//   console.log(lowerName);
//   const normalName = author[0].toUpperCase() + ;
//   console.log(normalName);
// };

// normalizeAuthorName('  JuliE sussMan (Contributor)');

// const newBookTitle = books[1].replace('Programs', 'Software');

// const logBookTheme = function (title) {
//   title = title.toLowerCase();

//   if (title.startsWith('computer')) {
//     console.log('This book is about computers');
//   }
//   if (title.includes('algorthims') && title.includes('structures')) {
//     console.log('This book is about a and data stru');
//   }
//   if (
//     title.endsWith('system') ||
//     (title.endsWith('systemy') && !title.includes('operacyjny'))
//   ) {
//     console.log(
//       'this book about some systems but not definetly not about operating systems'
//     );
//   }
// };

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];
// const bookCategories =
//   'science;computing;computer science;algorithms;business;operating systems;networking;electronics';

// function logBookCategories(str) {
//   const categories = str.split(';');

//   for (let category of categories) {
//     console.log(category);
//   }
// }
// logBookCategories(bookCategories);

// const getKeywordsAsString = function (book) {
//   const getKey = ;
//   console.log(getKey);
// };

// getKeywordsAsString(books);
// const bookChapters = [
//   ['The Basics', 14],
//   ['Sorting', 254],
//   ['Searching', 372],
//   ['Graphs', 526],
//   ['Strings', 706],
// ];
// const logBookChapters = function (bookChapters) {
//   for (let i = 0; i < bookChapters.length; i++) {
//     console.log(bookChapters[i][0].padEnd(20, '_') + ' ' + bookChapters[i][1]);
//   }
// };
// logBookChapters(bookChapters);

// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

// The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

// THIS TEST DATA (pasted to textarea)
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

// HINT 1: Remember which character defines a new line in the textarea 😉
// HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
// HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
// HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

// Afterwards, test with your own test data!
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   console.log(text);
//   const textArr = text.split('\n');
//   console.log(textArr);

//   for (const [i, arr] of textArr.entries()) {
//     const [first, second] = arr.toLowerCase().trim().split('_');
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✔'.repeat(i + 1)}`);
//   }
// });
// console.log(flights.split('+'));
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${from.slice(0, 3).toUpperCase()} ${to
    .slice(0, 3)
    .toUpperCase()} (${time.replace(':', 'h')})`;
  console.log(output.padStart(35));
}
