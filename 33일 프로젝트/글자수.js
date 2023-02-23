const productNameInputElement = document.getElementById('product-name');
const remainingCharsElemet= document.getElementById('remaining-chars')

const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event){
  const enteredText = event.target.value;
  enteredTextLength = enteredText.length;
  const remainingCharacters = maxAllowedChars - enteredTextLength

  remainingCharsElemet. textContent = remainingCharacters;
};

productNameInputElement.addEventListener('input', updateRemainingCharacters);
