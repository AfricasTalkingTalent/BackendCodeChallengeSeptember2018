class Person {
  
    constructor(age) {
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 0) {
          console.log("The age cannot be a negative value");
          return;
        }
        this._age = value;
    }
  
  }
  let user = new Person(22);
  console.log(user.age); //returns 22

  user = new Person(-15); // logs an error message