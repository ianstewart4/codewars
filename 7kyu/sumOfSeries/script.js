// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

// My solution
// First time I've used the toFixed method. Added to Anki

function SeriesSum(n) {
    let denom = 1
    let sum = 0
    for (let i = 0; i < n; i++) {
        sum += 1 / denom
        denom += 3
    }
    return sum.toFixed(2)
}

// Best
// This one is interesting. I've never seen multiple variables initialized in a for loop but this keeps it a bit cleaner. Also a cleaner method to increment the denominator
function SeriesSum(n) {
    for (var s = 0, i = 0; i < n; i++) {
        s += 1 / (1 + i * 3)
    }

    return s.toFixed(2)
}