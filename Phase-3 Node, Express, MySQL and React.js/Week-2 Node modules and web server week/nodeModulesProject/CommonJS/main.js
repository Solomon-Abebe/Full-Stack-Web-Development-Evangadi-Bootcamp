//importing and using greetModule
import { greet, getPrivateGreeting } from './greetModule.js';

console.log(greet("Solomon"));  // Output: Hello, Solomon!

console.log(getPrivateGreeting());  // Output: Hello from the private side!

// The following will throw an error because privateFunction is not exported
// console.log(privateFunction());  // Uncaught ReferenceError: privateFunction is not defined

