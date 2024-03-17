"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
}
class Dev extends Person {
    constructor(name, age, profession) {
        super(name, age);
        this.profession = profession;
    }
    speak() {
        console.log(`My name is ${this.name} and I am a ${this.profession}`);
    }
}
const generalPerson = new Person("Hassan", 20);
const developer = new Dev("Hassan", 20, "A passionate Mern Stack Developer");
generalPerson.speak();
developer.speak();
generalPerson.speak();
