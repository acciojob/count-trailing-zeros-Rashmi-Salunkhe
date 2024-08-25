function trailingZeros(n) {
    let count = 0;
    while (n >= 5) {
        n = Math.floor(n / 5);
        count += n;
    }
    return count;
}

const input = prompt("Enter a number");
const number = parseInt(input, 10); // Convert the input to a number
if (!isNaN(number) && number >= 0) { // Validate the input
    alert(trailingZeros(number));
} else {
    alert("Please enter a valid non-negative integer.");
}
