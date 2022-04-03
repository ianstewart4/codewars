// Instructions: In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// My solution

function filter_list(l) {
    return l.filter(x => Number.isInteger(x))
}

// could have done:

function filter_list(l) {
    return l.filter(Number.isInteger);
}

// Best solution. I like the one above or even mine better. Cleaner and just as easy if not easier to understand

function filter_list(l) {
    return l.filter(function(v) {return typeof v == 'number'})
  }