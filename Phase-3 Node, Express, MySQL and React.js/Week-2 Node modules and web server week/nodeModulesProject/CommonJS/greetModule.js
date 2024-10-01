// Private variables and functions
let privateGreeting = "Hello from the private side!";

function privateFunction() {
  return "This is a private function!";
}

// Public functions
function greet(name) {
  return `Hello, ${name}!`;
}

function getPrivateGreeting() {
  return privateGreeting;
}

// Export only the public functions
export { greet, getPrivateGreeting };
