var jsonmix = require('jsonmix');

var Employee = function() {};
 
Employee.prototype.getName = function() {
    return this.firstName + ' ' + this.lastName;
};

let json = {
    "firstName": "John",
    "lastName": "Doe",
    "salary": 100000,
    "age": 33	
};

let employee = jsonmix(json)
    .withObject(Employee)
    .build();

console.log(employee.getName());

