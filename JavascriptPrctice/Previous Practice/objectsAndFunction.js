let person = {
    name: "Haris",
    age: 23,
    country: "Pakistan",
    logData: function() {
        console.log(this.name + " is " + this.age +" years old and lives is "+this.country)
    }
}
person.logData()