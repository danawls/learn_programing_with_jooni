const cal = {
    add: function(a, b) {
        return (a + b);
    },
    sub: function(a, b) {
        return (a - b);
    },
    devide: function(a, b) {
        return (a / b);
    },
    multifly: function(a, b) {
        return (a * b);
    },
    square: function(a, b) {
        return (a ** b);
    },
};

const addResult = cal.add(1, 2);
const subResult = cal.sub(addResult, 2);
const devideResult = cal.devide(subResult, 1);
const multiflyResult = cal.multifly(devideResult, 5);
const squareResult =  cal.square(multiflyResult, 2);

console.log(addResult, subResult, devideResult, multiflyResult, squareResult);

const allResults = [cal.add(1, 2), cal.devide(1, 2), cal.multifly(1, 2), cal.square(1, 2), cal.sub(1, 2)];

console.log(allResults);