function checkIt()  {

  var business = 0;
  var emo  = 0;
  var prep = 0;
  var jock = 0;


  var elements = document.getElementsByClassName ('answer');

  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'business') {
        business++;
      }
      else if (e.value == 'jock') {
        jock++;
      }
      else if (e.value == 'prep') {
        prep++;
      }
      else if (e.value == 'emo') {
        emo++;
      }
    }
  }

//counts
  var counts = "business: " + business +", " +
               "jock: " + jock +", " +
               "prep: " + prep +", " +
               "emo: " + emo;
//high value
  var max = Math.max ( business, jock, prep, emo );
//form a message

  var message;

  if (max == business) {
    message = "You are a business boy"
  }
  else if (max == jock) {
    message = "You are a jock"
  }
  else if (max == prep) {
    message = "You are a prep"
  }
  else if (max == emo) {
    message = "You are emo"
  }

  //display results
  //document.getElementById('result').innerHTML = counts;
  document.getElementById('result-text').innerHTML = message;
}
