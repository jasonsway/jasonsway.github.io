var deck = ["Liberal", "Liberal", "Liberal", "Liberal", "Liberal", "Liberal", "Fascist", "Fascist", "Fascist", "Fascist", "Fascist", "Fascist", "Fascist", "Fascist", "Fascist", "Fascist", "Fascist"]
var i = 0;

function shuffle()
{
  // for 1000 turns
  // switch the values of two random cards
  for (var i = 0; i < 1000; i++)
  {
    var location1 = Math.floor((Math.random() * deck.length));
    var location2 = Math.floor((Math.random() * deck.length));
    var tmp = deck[location1];

    deck[location1] = deck[location2];
    deck[location2] = tmp;
  }

}

function nextItem() {
    i = i + 1; // increase i by one
    i = i % deck.length; // if we've gone too high, start from `0` again
    return deck[i]; // give us back the item of where we are now
}

shuffle()

i = 0;

function hitMe() {
  var btn = document.createElement("p");
  btn.innerHTML = deck[i];
  document.body.appendChild(btn);
  i++;
}

/*
document.getElementById('next_button').addEventListener(
    'click', // we want to listen for a click
    function (e) { // the e here is the event itself
        document.getElementById('output').textContent = nextItem();
    }
);
*/

console.log(deck)