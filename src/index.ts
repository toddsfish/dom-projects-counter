// Define Counter class
export class Counter {
  // Initialise the counter
  private count: number;
  private color: string;

  // Class Constructor, initialise counter to 0
  constructor() {
    this.count = 0;
    this.color = "black";
  }

  // Increment the counter
  public increment() {
    this.count++;
    this.setColor();
  }

  // Get the current count of the counter
  public getCount() {
    return this.count;
  }

  // Decrement the counter
  public decrement() {
    this.count--;
    this.setColor();
  }

  // Reset the counter
  public reset() {
    this.count = 0;
    this.setColor();
  }

  // Set counter color function
  public setColor() {
      if (counter.getCount() > 0) {
        this.color = "green";
      } else if (counter.getCount() < 0) {
        this.color = "red";
      } else {
        this.color = "black";
      }
    }

  // Get counter color function
  public getColour() {
    return this.color;
  }
}

// Create instance of counter / a counter object
const counter = new Counter;

// get the counter element on page
let counterElement = document.getElementById('counter-value');

// set the counterElement inner html to counter object count
if (counterElement !== null) {
  counterElement.innerHTML = counter.getCount().toString();
}

// Classes can't have spaces, what you have there is an element with two separate classes on it. To select an element with two classes, you use a compound class selector
// <button class="btn increase">+</button>
// This will select the first button with both classes
// Select increase button
let incrementButton = document.querySelector('.btn.increase');

// Add an event listener for click event on the incremenButton element.  On click increment counter object count property. The set the counter element to the counter objects current count property.
if (incrementButton !== null) {
  incrementButton.addEventListener('click', () => {
    counter.increment();
    if (counterElement !== null) {
      counterElement.innerHTML = counter.getCount().toString();
      counterElement.style.color = counter.getColour();
    }
  });
}

// Select decrease button
let decrementButton = document.querySelector('.btn.decrease');
// Add an event listener for click event on the DecrementButton element.
if (decrementButton !== null) {
  decrementButton.addEventListener('click', () => {
    counter.decrement();
    if (counterElement !== null) {
      counterElement.innerHTML = counter.getCount().toString();
      counterElement.style.color = counter.getColour();
    }
  });
}

// Select reset button
let resetButton = document.querySelector('.btn.reset');
// Add an event listener for click event on the ResetButton element.
if (resetButton !== null) {
  resetButton.addEventListener('click', () => {
    counter.reset();
    if (counterElement !== null) {
      counterElement.innerHTML = counter.getCount().toString();
      counterElement.style.color = counter.getColour();
    }
  });
}