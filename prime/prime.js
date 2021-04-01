let x = prompt("Enter a number:");
function isPrime(x) {
    var firstFactor;
    var i;
    for (i = 2; i < x; i++) {
        let searcher = x % i;
        if ((searcher === 0) && (firstFactor != i)) {
            break;
        } else {
            firstFactor = i;
        }
    }
    if (firstFactor === (x - 1)) {
        alert(`The number ${x} is prime.`);
    } else {
        firstFactor ++;
        alert(`The number ${x} is not prime. It's first factor is ${i}.`);
    }
};
isPrime(x);