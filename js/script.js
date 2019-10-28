  
// stores the deck 
var deck = ["Liberal", "Liberal", "Liberal", "Liberal", "Liberal", "Liberal", "Fascist", "Fascist", "Fascist", "Fascist", "Fascist", "Fascist", "Fascist", "Fascist", "Fascist", "Fascist", "Fascist"]

// play music
function playAudio(url) {
  var a = new Audio(url);
  a.play();
}

// sound chosen
// button.mp3
// click2.wav
var sound = 'realplay.m4a'

// random shuffle
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

// shuffle the deck
shuffle()

// counter
var i = 0;

function hitMe() {
  var btn = document.createElement("p");
  btn.innerHTML = deck[i];
  document.body.appendChild(btn);
  i++;
}

// lib button
function hitLib() {
  playAudio(sound)
  if (deck[i] == "Liberal") {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(deck[i]);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);

    i++;

    document.getElementById('counter').innerHTML = i;
  }
  else {
    var node = document.createElement("LI");
    var textnode = document.createTextNode("GAME OVER.");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);

    document.getElementById("lib-button").disabled = true;
    document.getElementById("fasc-button").disabled = true;

    // playAudio('gameover.wav')


  }

}

// fasc button
function hitFasc() {
    playAudio(sound)

  if (deck[i] == "Fascist") {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(deck[i]);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);

    i++;
    
    document.getElementById('counter').innerHTML = i;
  }
  else {
    var node = document.createElement("LI");
    var textnode = document.createTextNode("GAME OVER.");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);

    document.getElementById("lib-button").disabled = true;
    document.getElementById("fasc-button").disabled = true;

    // playAudio('gameover.wav')

  }

}

console.log(deck)