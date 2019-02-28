// Lightning Exercise 1: Given two options of data structures - array or object - which should you use? 
// You need to represent a red 2015 Ford Mustang in your code.
const car = {
    make: "Ford",
    model: "Mustang",
    year: 2015,
    color: "red"
};

// Lightning Exercise 2: Given two options of data structures - array or object - which should you use? 
// You need to store list of animal names in a shelter. The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".
const animalShelter = ["Kippers", "Jack", "Gypsy"];

// Lightning Exercise 3: Define an object for four family members, and put each object in an array named familyMembers. 
// Each family member object that you create should have the same keys on them, but the values will be different.

const mom = {
    Name: "Margaret",
    favoriteColor: "Blue"
};

const dad = {
    Name: "Jim",
    favoriteColor: "Green"
};

const brother = {
    Name: "Jimmy",
    favoriteColor: "blue"
};

let family = [mom, dad];

family.push(brother);

// console.log(family);

const lassie = {
    age: 7,
    breed: "Collie",
    color: "White and Brown"
}

//Dot Notation

// string interpolation
console.log(`String Interpolation: Lassie's breed is ${lassie.breed}`);
//string concatenation
console.log("String Concatenation: Lassie's breed is " + lassie.breed);

// Lightning Exercise: Given the object below, output each of the values to the console using dot notation.

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

console.log("Wardrobe Lightning Exercises");
console.log(`My wardrobe is ${wardrobe.height} inches tall, ${wardrobe.depth} inches deep, and ${wardrobe.width} inches wide. It was made by ${wardrobe.manufacturer}`);

for(let i =0; i < wardrobe.contents.length; i++){
    console.log(`This is in my closet: ${wardrobe.contents[i]}`);
}

//Dot Notation to create a new key
wardrobe.material = "Cedar";
console.log("Create new key:", wardrobe);

//Square Bracket Notation
console.log("Square Bracket Dot Notation:", lassie["breed"]);

//using a variable with square bracket notation
const keyToLookUp = "breed"
console.log("Variable with square bracket notation:", lassie[keyToLookUp]);

//will return undefined since it is looking for the key/value pair named keyToLookUp and that doesn't exist on the object
console.log("Undefined key", lassie.keyToLookUp);


const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}
console.log("Empire State Building Lightning Exercises");
// Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.
console.log(`Stories: ${empireStateBuilding.stories}, Height: ${empireStateBuilding.height}, SquareFeet: ${empireStateBuilding.squareFeet}, East/West: ${empireStateBuilding.eastWestLength}, North/South: ${empireStateBuilding.northSouthLength}`);

// Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. 
// Create 5 variables first with the keys as their values. Use those variables to look up the values.

const key1 = "address";
const key2 = "constructionDate";
const key3 = "cost";
const key4 = "owner";
const key5 = "architect";

console.log(`Address: ${empireStateBuilding[key1]}, Construction Date: ${empireStateBuilding[key2]}, Cost: ${empireStateBuilding[key3]}, Owner: ${empireStateBuilding[key4]}, Architect: ${empireStateBuilding[key5]}`);

//Arrays as Values in a Key/Value Pair
const kennel = {
    name: "Nashville North Kennels",
    address: "100 Demonbreun Road",
    manager: "Harper Frankstone",
    capacity: 50,
    currentAnimals: ["Jet", "Snickers", "Blue", "Jacks", "Flap", "Barnum"]
}

const boardedAnimals = kennel.currentAnimals;

console.log("Arrays as Values");
for(let i = 0; i <boardedAnimals.length; i++){
    console.log(boardedAnimals[i])
}


const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

console.log("NSS Lightning Exercise");
// Lightning Exercise 1: Output the names of the part-time instructors followed by the names of the full-time instructors in the console.
console.log(nashvilleSoftwareSchool.instructors.partTime,nashvilleSoftwareSchool.instructors.fullTime);

// Lightning Exercise 2: Output only Andy and Zoe in the console.
console.log(nashvilleSoftwareSchool.instructors.fullTime[4], nashvilleSoftwareSchool.instructors.partTime[0]);
