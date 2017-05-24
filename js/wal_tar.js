function checkIt() {
  // Initialize scores
  var walmart = 0;
  var target= 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'walmart') {
        walmart++;
      }
      else if (e.value == 'target') {
        target++;
      }

    }
  }


  // Determine result
  var counts = "walmart: " + walmart+ ", " +
               "target: " + target + ", "


  // What is the highest value?
  var max = Math.max (walmart , target);

  // Form a message
  var message;

  if (max == walmart) {
    message = "You Are A Walmart Shopper. You enjoy shopping for hours but you hate the long lines. You shop for food.";
  }
  else if (max == target) {
    message = " You Would Be More Of A Target Person. You shop for clothes and other things. ";
  }


  // Display result
  //document.getElementById('result').innerHTML = counts;
  document.getElementById('result-text').innerHTML = message;
}
