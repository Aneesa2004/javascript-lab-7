// Mouse Events
const hoverButton = document.getElementById('hoverButton');
const mouseMessage = document.getElementById('mouseMessage');
hoverButton.addEventListener('mouseover', () => {
  mouseMessage.textContent = 'You hovered over the button!';
});
hoverButton.addEventListener('mouseout', () => {
  mouseMessage.textContent = 'You moved the mouse away!';
});

// Keyboard Events
const keyboardInput = document.getElementById('keyboardInput');
const keyboardMessage = document.getElementById('keyboardMessage');
keyboardInput.addEventListener('keydown', (event) => {
  keyboardMessage.textContent = `Last key pressed: ${event.key}`;
});

// Form Events
const myForm = document.getElementById('myForm');
const formMessage = document.getElementById('formMessage');
myForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formMessage.textContent = 'Form submitted!';
});

// Focus Events
const focusInput = document.getElementById('focusInput');
const focusMessage = document.getElementById('focusMessage');
focusInput.addEventListener('focus', () => {
  focusMessage.textContent = 'Focused on input!';
});
focusInput.addEventListener('blur', () => {
  focusMessage.textContent = 'Input lost focus!';
});

// Event Delegation
const buttonContainer = document.getElementById('buttonContainer');
const delegationMessage = document.getElementById('delegationMessage');
buttonContainer.addEventListener('click', (event) => {
  if (event.target.matches('button.delegatedButton')) {
    delegationMessage.textContent = `You clicked on ${event.target.textContent}`;
  }
});
