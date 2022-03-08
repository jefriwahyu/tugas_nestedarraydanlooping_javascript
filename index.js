function panggilNestedArray(value) {
  var ar = [];
  for (var i = 0; i < value[0].length; i++) {
    var ab = [];
    ab.push(value[0][i], value[1][i], value[2][i]);
    for (var j = 0; j < value.length; j++) {

    }
    ar.push(ab);
  }
  console.log(ar);
}

var nestedArray = [
  [1, 2, 3, 4],
  ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
  ['Facebook', 'Tesla', 'Microsoft', 'Apple']
]

panggilNestedArray(nestedArray);
