function ExecuteScript(strId)
{
  switch (strId)
  {
      case "645lYPjDbWz":
        Script1();
        break;
  }
}

function Script1()
{
  var min = 500; // Minimum value (inclusive)
var max = 9999; // Maximum value (inclusive)

var randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;

var player = GetPlayer();
player.SetVar("grams", randomnumber); // Replace "randomNumber" with your Storyline variable name
}

