const inventors = [
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];

const boulevards = [
  'Boulevards of Paris',
  'City walls of Paris',
  'Thiers wall',
  'Wall of Charles V',
  'Wall of Philip II Augustus',
  'City gates of Paris',
  "Haussmann's renovation of Paris",
  'Boulevards of the Marshals',
  'Boulevard Auguste-Blanqui',
  'Boulevard Barbès',
  'Boulevard Beaumarchais',
  "Boulevard de l'Amiral-Bruix",
  'Boulevard Mortier',
  'Boulevard Poniatowski',
  'Boulevard Soult',
  'Boulevard des Capucines',
  'Boulevard de la Chapelle',
  'Boulevard de Clichy',
  'Boulevard du Crime',
  "Boulevard du Général-d'Armée-Jean-Simon",
  'Boulevard Haussmann',
  "Boulevard de l'Hôpital",
  'Boulevard des Italiens',
  'Boulevard Lefebvre',
  'Boulevard de la Madeleine',
  'Boulevard de Magenta',
  'Boulevard Malesherbes',
  'Boulevard Marguerite-de-Rochechouart',
  'Boulevard Montmartre',
  'Boulevard du Montparnasse',
  'Boulevard Raspail',
  'Boulevard Richard-Lenoir',
  'Boulevard Saint-Germain',
  'Boulevard Saint-Michel',
  'Boulevard de Sébastopol',
  'Boulevard de Strasbourg',
  'Boulevard du Temple',
  'Boulevard Voltaire',
  'Boulevard Hippolyte-Marquès',
];

const people = [
  'Beck, Glenn',
  'Becker, Carl',
  'Beckett, Samuel',
  'Beddoes, Mick',
  'Beecher, Henry',
  'Beethoven, Ludwig',
  'Begin, Menachem',
  'Belloc, Hilaire',
  'Bellow, Saul',
  'Benchley, Robert',
  'Benenson, Peter',
  'Ben-Gurion, David',
  'Benjamin, Walter',
  'Benn, Tony',
  'Bennington, Chester',
  'Benson, Leana',
  'Bent, Silas',
  'Bentsen, Lloyd',
  'Berger, Ric',
  'Bergman, Ingmar',
  'Berio, Luciano',
  'Berle, Milton',
  'Berlin, Irving',
  'Berne, Eric',
  'Bernhard, Sandra',
  'Berra, Yogi',
  'Berry, Halle',
  'Berry, Wendell',
  'Bethea, Erin',
  'Bevan, Aneurin',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bierce, Ambrose',
  'Biko, Steve',
  'Billings, Josh',
  'Biondo, Frank',
  'Birrell, Augustine',
  'Black Elk',
  'Blair, Robert',
  'Blair, Tony',
  'Blake, William',
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
filteredInventors = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
console.log(filteredInventors);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
mappedFirstLastNameInventors = inventors.map((inventor) => ({
  first: inventor.first,
  last: inventor.last,
}));
console.log(mappedFirstLastNameInventors);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const oldesToYoungestInventors = inventors.sort((a, b) => a.year - b.year);
console.log(oldesToYoungestInventors);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const allYearsLivedByAllInventors = inventors.reduce(
  (accumulator, currentValue) => {
    return accumulator + currentValue.passed - currentValue.year;
  },
  0
);
console.log(allYearsLivedByAllInventors);

// 5. Sort the inventors by years lived
const sortedInventorsByYearsLived = inventors.sort((a, b) => {
  return a.passed - a.year - (b.passed - b.year);
});
console.log(sortedInventorsByYearsLived);

// 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const listOfBoulevardsWithDeInTheName = boulevards.filter((boulevard) =>
  boulevard.includes('de')
);
console.log(listOfBoulevardsWithDeInTheName);

// 7. Sort Exercise
// Sort the people alphabetically by last name

// one way
const sortedPeopleByLastName_1 = people.sort();
console.log(sortedPeopleByLastName_1);

// another way
const sortedPeopleByLastName_2 = people.sort((firstPerson, secondPerson) => {
  const [firsPersonLastName, _firstPersonName] = firstPerson.split(',');
  const [secondPersonLastName, _secondPersonName] = secondPerson.split(',');

  return firsPersonLastName - secondPersonLastName;
});
console.log(sortedPeopleByLastName_2);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
];
const sumOfAllCarInstances = data.reduce((carCounter, currentValue) => {
  if (!carCounter[currentValue]) {
    carCounter[currentValue] = 0;
  }
  carCounter[currentValue]++;
  return carCounter;
}, {});
console.log(sumOfAllCarInstances);
