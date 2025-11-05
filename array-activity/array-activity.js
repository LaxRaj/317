// JavaScript Activity: Hands-on practice Array.map() and Array.filter() + a bit more!

// Dataset: Array of notable scientists
const people = [
  { id: 0, name: 'Creola Katherine Johnson', profession: 'mathematician', accomplishment: 'spaceflight calculations', imageId: 'MK3eW3A' },
  { id: 1, name: 'Mario José Molina-Pasquel Henríquez', profession: 'chemist', accomplishment: 'discovery of Arctic ozone hole', imageId: 'mynHUSa' },
  { id: 2, name: 'Mohammad Abdus Salam', profession: 'physicist', accomplishment: 'electromagnetism theory', imageId: 'bE7W1ji' },
  { id: 3, name: 'Percy Lavon Julian', profession: 'chemist', accomplishment: 'pioneering cortisone drugs, steroids and birth control pills', imageId: 'IOjWm71' },
  { id: 4, name: 'Subrahmanyan Chandrasekhar', profession: 'astrophysicist', accomplishment: 'white dwarf star mass calculations', imageId: 'lrWQx8l' }
];

console.log('=== Original Dataset ===');
console.log(people);
console.log('\n');

// cleaning
const cleanedPeople = people.map(person => {
  const { imageId, ...personWithoutImageId } = person;
  return personWithoutImageId;
});

console.log('=== Task 0: Data Cleaning (removed imageId) ===');
console.log(cleanedPeople);
console.log('\n');

// categorizing
const chemists = cleanedPeople.filter(person => person.profession === 'chemist');
const everyoneElse = cleanedPeople.filter(person => person.profession !== 'chemist');

console.log('=== Task 1: Categorizing Scientists ===');
console.log('Chemists:');
console.log(chemists);
console.log('\nEveryone else:');
console.log(everyoneElse);
console.log('\n');

// filtering
const peopleNotThreeTokens = cleanedPeople.filter(person => {
  const nameTokens = person.name.split(' ');
  return nameTokens.length !== 3;
});

console.log('=== Task 2: Filtering out people with exactly 3 name tokens ===');
console.log('People whose name does NOT have exactly 3 tokens:');
console.log(peopleNotThreeTokens);
console.log('\n');

// all array method testing
const firstPhysicist = cleanedPeople.find(person => person.profession === 'physicist');
const firstAstrophysicistIndex = cleanedPeople.findIndex(person => person.profession === 'astrophysicist');
const allHaveProfession = cleanedPeople.every(person => person.profession !== undefined && person.profession !== null);

console.log('=== Task 3: Exploring More Array Methods ===');
console.log('1. First physicist (using find()):');
console.log(firstPhysicist);
console.log('\n2. Index of first astrophysicist (using findIndex()):');
console.log(firstAstrophysicistIndex);
console.log('\n3. All scientists have a defined profession (using every()):');
console.log(allHaveProfession);
console.log('\n');

//summary
console.log('=== Summary ===');
console.log(`Total people: ${cleanedPeople.length}`);
console.log(`Chemists: ${chemists.length}`);
console.log(`Everyone else: ${everyoneElse.length}`);
console.log(`People without exactly 3 name tokens: ${peopleNotThreeTokens.length}`);
console.log(`First physicist: ${firstPhysicist ? firstPhysicist.name : 'Not found'}`);
console.log(`First astrophysicist index: ${firstAstrophysicistIndex !== -1 ? firstAstrophysicistIndex : 'Not found'}`);
console.log(`All have profession: ${allHaveProfession}`);

