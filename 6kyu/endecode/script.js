// The Vowel Code

// Description:
// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

// MY SOLUTION
// Of course this is a case where regex would be much cleaner but as always, for the purposes of learning I am avoiding leaning on it for now


function encode(string) {
    let codes = {
        'a': '1',
        'e': '2',
        'i': '3',
        'o': '4',
        'u': '5'
    }
    let strArr = string.split('')
    for (let i = 0; i < strArr.length; i++) {
        if (codes.hasOwnProperty(strArr[i])) {
            strArr[i] = codes[strArr[i]]
        }
    }
    return strArr.join('')
}

function decode(string) {
    let codes = {
        '1': 'a',
        '2': 'e',
        '3': 'i',
        '4': 'o',
        '5': 'u'
    }
    let strArr = string.split('')
    for (let i = 0; i < strArr.length; i++) {
        if (codes.hasOwnProperty(strArr[i])) {
            strArr[i] = codes[strArr[i]]
        }
    }
    return strArr.join('')
}

// Best
// This is an interesting solution and another way I haven't seen regex used.
// Cool that the 'replace' returns almost the same thing but one with indexOf and one charAt
// I like this one a lot

// turn vowels into numbers
function encode(string) {
    return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
}

//turn numbers back into vowels
function decode(string) {
    return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
}