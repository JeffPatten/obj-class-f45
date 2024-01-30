//Create your first object… Create a person object that has a firstName, lastName and age keys.

let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 18
}

const personsLast = 'lastName';

//Now, we can access any of the info on our peron

// console.log(person.firstName);

//We could also type:

// console.log(person['firstName']);
// console.log(person[personsLast]);

//It is less common to access an object value via subscripting (using square brackets), however, you will find some cases in the future where you will want to use subscripting.


//Let’s practice destructuring.

//First, create an object called meal with appetizer, entree, dessert, and drink properties. Their values should all be strings.

let meal = {
    appetizer: "Mac 'n Cheese balls",
    entree: "salmon",
    dessert: "key lime pie",
    drink: "Dr. Pepper"
};

//Now, destructure the dessert property off of the meal object

let {dessert} = meal;
console.log(dessert);

//Let’s destructure the appetizer and entree in the same declaration.

let { appetizer, entree } = meal;

console.log(appetizer)
console.log(entree)

//Last, let’s destructure the drink and rename the variable

let {drink: bestSodaEver} = meal;

console.log(bestSodaEver); 

//Note that this is doing the same thing as the following:
// const bestSodaEver = meal.drink

//Renaming in line with destructuring, however, allows us to do something like this with much shorter syntax

// const myAppetizer = meal.appetizer
// const myEntree = meal.entree
// const myDessert = meal.dessert
// const myDrink = meal.drink

// const {appetizer: myAppetizer, entree: myEntree, dessert: myDessert, drink: myDrink} = meal

// or even a mixture where we don't want to rename all of the props
// const {appetizer, entree, dessert, drink: bestSodaEver} = meal



//Looping
//One of the cool things we can do in JavaScript is loop over the keys in an object. Ex.

for (let attr in person) {
  console.log(attr, person[attr])
}
//Now, notice, we were just able to loop over this object and print each key. How can we print the values though? We can use subscripting to print out each key’s value.

//The for-in loop is going to automatically iterate through the keys, so we know we have access to each key along the way. As we iterate, we simply want to print the person’s value found at a given key. We can do this with subscripting, we cannot do this with dot-notation.

//Adding Properties
//We also have the ability to add values to an object. How do we do this?

meal.cost = 23;
console.log(meal);

//Deleting Properties

delete meal.cost
console.log(meal);



//Classes

//Classes are a little more complicated than just creating an object, but are worth the work. Ex:

// class Dog {
//     constructor (name, color, age) {
//         this.name = name
//         this.color = color
//         this.age = age
//     }
// }

//We will come back and modify this, however, let’s create an instance of a dog…

// let ghost = new Dog("Ghost", "Liver", 2);
// console.log(ghost);

//So now, we have a single variable holding the entire object that is ‘ghost’. And the great part is we can keep creating new dogs, with just one line of code. Ex:

// let beethoven = new Dog('Beethoven', 'brown/white', 8);
// console.log(beethoven);

//Let’s modify the Dog class to also include a greeting function. Ex:

class Dog {
  constructor(name, breed, age) {
    this.name = name
    this.breed = breed
    this.age = age
  }

    greet(){
        console.log(`Hello, my name is ${this.name} a ${this.breed}, and I am ${this.age} years old.`)
  }

}

let ghost = new Dog("Ghost", "Liver", 2);
ghost.greet();
// //Combining steps. Loop over the keys of an instance of a dog. Ex:


// Lets extend the Dog class and create a Puppy subclass:

class Puppy extends Dog {
    constructor (name, breed, age, trainingLvl) {
        super(name, breed, age);

        this.trainingLvl = trainingLvl;
    }

    trained (){
        this.trainingLvl += 10;
    }
}

let pup = new Puppy('scout', 'labradoodle', 1, 20);

console.log(pup);
pup.greet()
pup.trained();
console.log(pup);