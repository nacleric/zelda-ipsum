beedleText = ["Oooooh ", "THANKYOU "];
naviText = ["Hey!, Listen! ", "Hello ", "Hey! ", "Listen! ", "Watch out "];
linkText = " ";

result = ""

const button = document.getElementById("button");

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function generateText() {
  // queries the all the radiobuttons and returns the selected value
  const radioButtons = document.getElementsByName("radioButton");
  for(let i = 0; i < radioButtons.length; i++) {
    if(radioButtons[i].checked) {
      value = radioButtons[i].value;
    }
  }
  loopLength = getRandomInt(100)

  // checks which radio button is pressed
  if(value === "navi") {
    for (let i = 0; i < loopLength; i++) {
      result += naviText[getRandomInt(naviText.length)] 
    }
    console.log(result)
  }
  else if(value === "beedle") {
    for (let i = 0; i < loopLength; i++) {
      result += beedleText[getRandomInt(beedleText.length)] 
    }
    console.log(result)
  }
  else if(value === "link") {
    for (let i = 0; i < loopLength; i++) {
      result += linkText[getRandomInt(linkText.length)] 
    }
    console.log(result)
  }

  // creates a new element to contain generated text
  let element = document.getElementById("text-box")
  let textContent = document.createTextNode(result)
  element.appendChild(textContent)

  // resets result to an empty string 
  result = ""
}

button.addEventListener("click", generateText, false);