class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    speak() {
      console.log(`My name is ${this.name} and i'm ${this.age} years old`);
    }
  }
  
class Q2 extends Person {
    profession: string;
  
    constructor(name: string, age: number, profession: string) {
      super(name, age);
      this.profession = profession;
      console.log(profession);
    }
  
    speak() {
      console.log(`My name is ${this.name} and I am a ${this.profession}`);
    }
  }
  
const generalPerson = new Person("Hassan", 20);
const developer = new Q2("Hassan", 20, "A passionate Mern Stack Developer");
  
  generalPerson.speak();
  developer.speak();
  
  generalPerson.speak();