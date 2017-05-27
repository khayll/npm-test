var jsonmix = require('jsonmix');

var Employee = function() {};
 
Employee.prototype.getName = function() {
    return this.firstName + ' ' + this.lastName;
};

var json = {
    "firstName": "John",
    "lastName": "Doe",
    "salary": 100000,
    "age": 33	
};

var employee = jsonmix(json)
    .withObject(Employee)
    .build();

console.log(employee.getName());

