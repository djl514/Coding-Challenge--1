// Task 1: Variables and Data Types

let employeeName = "Joshua";
const employeeID = 430;
var isActive = true;

console.log(employeeName, typeof(employeeName));
console.log(employeeID, typeof(employeeID));
console.log(isActive, typeof(isActive));


// Task 2: Compound Data Types
let products = ["Iphone", "Ipad", "Apple Watch"];
const productDetails = {
    price: 300,
    inStock: true,
    name: products
};

console.log(products, productDetails);

// Task 3: Assignment Operators
let accountBalance = 20000;

accountBalance += 500;
console.log(accountBalance);

accountBalance -= 15500;
console.log(accountBalance);

accountBalance *= 4;
console.log(accountBalance);

accountBalance /= 2;
console.log(accountBalance);

accountBalance %= 3;
console.log(accountBalance);

// Task 4: Comparison Operators

let employeeScore1 = 9;
let employeeScore2 = 4;
console.log(employeeScore1 > employeeScore2);
console.log(employeeScore2 < employeeScore1);
console.log(employeeScore1 >= employeeScore2);
console.log(employeeScore1 <= employeeScore2);
console.log(employeeScore1 === employeeScore2);
console.log(employeeScore1 !== employeeScore2);