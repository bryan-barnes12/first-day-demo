function highChecker(a, b) {
    a = prompt("Enter a number.");
    b = prompt("Enter another number.");
    if (parseFloat(a) > parseFloat(b)) {
        alert(`${a} is greater than ${b}.`);
    } else if (parseFloat(a) < parseFloat(b)) {
        alert(`${b} is greater than ${a}.`);
    } else {
        alert(`${a} is equal ${b}.`);
    }
}
