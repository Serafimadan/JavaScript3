'use strict';

// parents constructor class with common arguments
class LivingBeing {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
}

// children class for man
class Human extends LivingBeing {
  constructor(
    name,
    age,
    gender,
    livingPlace,
    familyMembers,
    job,
    typeOfJob,
    favouriteActivities,
    animal,
  ) {
    super(name, age, job);
    this.gender = gender;
    this.livingPlace = livingPlace;
    this.familyMembers = familyMembers;
    this.typeOfJob = typeOfJob;
    this.favouriteActivities = favouriteActivities;
    this.animal = animal;
  }

  getWholeStory() {
    console.log(`${this.name} is a ${this.age} year old ${this.gender}, that lives in ${this.livingPlace}. He has a ${this.familyMembers.spouse} and ${this.familyMembers.children} children. 
As a day job he's a ${this.job}, that ${this.typeOfJob}. He likes to ${this.favouriteActivities}.`);
    this.animal.tellStory(this.name);
  }
}
// children class for horse
class Animal extends LivingBeing {
  constructor(name, age, color, feed, job, kindOfAnimal) {
    super(name, age, job);
    this.color = color;
    this.feed = feed;
    this.kindOfAnimal = kindOfAnimal;
  }

  tellStory(masterName) {
    console.log(`${masterName} has a ${this.kindOfAnimal}, named ${this.name}.
The horse is ${this.age} years old and has the color ${this.color}. Usually the horse eats ${this.feed} or ${this.job} for Abdulkareem.
And they lived happily ever after!`);
  }
}
// objects for
const Adel = new Animal(
  'Adel',
  15,
  'brown',
  'grass',
  'helps transport materials',
  'horse',
);

const Abdulkareem = new Human(
  'Abdulkareem',
  38,
  'man',
  'Riyadh',
  { spouse: 'wife', children: 3 },
  'construction worker',
  'makes houses',
  'eat dates and smoke water pipe',
  Adel,
);
Abdulkareem.getWholeStory();
