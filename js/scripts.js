var wordOrder = function(string) {
  var unsortedStringArray = string.split(" ");
  var stringArray = string.split(" ").sort();
  var output = [];
  var duplicates = {};
  var singles = {};

  unsortedStringArray.forEach(function(word, i){
    if (unsortedStringArray.indexOf(word) !== -1) {
      singles[unsortedStringArray[i]] = (unsortedStringArray.length - i);
    }
  });

    for (var i = 0; i < stringArray.length -1; i++) {
    if (stringArray[i + 1] == stringArray[i]) {
      duplicates[stringArray[i]] = 0;
    }
  }

  for (var i = 0; i < stringArray.length; i++) {
      if (stringArray[i + 1] === stringArray[i]) {
        duplicates[stringArray[i]] += 1;
      }
  }



  var duplicatesSorted = Object.keys(duplicates).sort(function(a, b){return duplicates[b] - duplicates[a]})

  duplicatesSorted.forEach(function(element){
    output.push(element);
  });

  var singlesSorted = Object.keys(singles).sort(function(a, b){return singles[b] - singles[a]})

  singlesSorted.forEach(function(element){
    if (output.indexOf(element) === -1) {
      output.push(element);
    }
  });


  return output;
}

$(document).ready(function() {
  $('form#word-order').submit(function(event) {
    var string = $("input#string").val();
    var result = wordOrder(string);

    result.forEach(function(word){
      $(".words").append("<li>" + word + "</li>")
      });

    $("#result").show();
    event.preventDefault();
  });

});
