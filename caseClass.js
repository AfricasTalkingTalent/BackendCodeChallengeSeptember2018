class Person {
  
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 0) {
          console.log('Hello ' + this.name + ' The age cannot be a negative value');
          return;
        }
        this._age = value;
    }
  
  }
  let user = new Person('John',22);
  console.log(user.age); //returns 22

  user = new Person('John',-15); // logs an error message