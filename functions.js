// A JavaScript function is a block of code designed to perform a particular task.

// A JavaScript function is executed when "something" invokes it (calls it).

function myFunction(p1, p2) {
    return p1 * p2;   // The function returns the product of p1 and p2
  }

  function numsum() {
    var num1 = 10
    var num2 = 20
    var sum = num1 + num2
    return sum
    console.log('test')
}

console.log(numsum())



function totalSum(num1,num2, num3=30) {
    console.log(num1+num2)
}

totalSum(5,5)