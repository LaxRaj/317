
const controls = document.querySelector('#controls');

function makeColorButton(color) {
  const btn = document.createElement('button');
  btn.id = color;                       // requirement: unique id equals color
  btn.textContent = color;
  btn.type = 'button';
  btn.setAttribute('aria-pressed', 'false');
  return btn;
}

// 3) Create & append buttons via JS only (no static HTML buttons)
const colors = ['pink', 'red', 'yellow'];
const buttons = colors.map(makeColorButton);
buttons.forEach(btn => controls.appendChild(btn));

// 4) Painter function using CSS variables (Challenge 5)
function setBackgroundVar(color) {
  document.documentElement.style.setProperty('--bg', color);
}

// 5) Wire up listeners with active state (Challenge 1)
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    setBackgroundVar(btn.id);
    // Update active state and accessibility
    buttons.forEach(b => {
      b.classList.toggle('active', b === btn);
      b.setAttribute('aria-pressed', String(b === btn));
    });
  });
});

// 6) Default state
setBackgroundVar('pink');
buttons.find(b => b.id === 'pink').classList.add('active');
buttons.find(b => b.id === 'pink').setAttribute('aria-pressed', 'true');


document.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();
  const map = { 
    p: 'pink', 
    r: 'red', 
    y: 'yellow',
    ' ': 'random' // Space bar for random
  };
  
  if (map[key]) {
    if (key === ' ') {
      // Random pastel color (Challenge 4)
      const randomColor = randomPastel();
      setBackgroundVar(randomColor);
      // Clear all active states for random
      buttons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
    } else {
      setBackgroundVar(map[key]);
      // Update active state
      buttons.forEach(b => {
        b.classList.toggle('active', b.id === map[key]);
        b.setAttribute('aria-pressed', String(b.id === map[key]));
      });
    }
  }
});


function randomPastel() {
  const r = Math.floor((Math.random() * 127) + 128);
  const g = Math.floor((Math.random() * 127) + 128);
  const b = Math.floor((Math.random() * 127) + 128);
  return `rgb(${r}, ${g}, ${b})`;
}

// Add random button
const randomBtn = makeColorButton('random');
randomBtn.textContent = 'random';
controls.appendChild(randomBtn);
randomBtn.addEventListener('click', () => {
  const randomColor = randomPastel();
  setBackgroundVar(randomColor);
  // Clear all active states for random
  buttons.forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-pressed', 'false');
  });
});

//traversal demo
console.log('\n🔍 DOM Traversal Examples:');
const traversalDemo = document.querySelector('#traversal-demo');

console.log('controls children:', controls.children);
console.log('first child:', controls.firstElementChild?.id);
console.log('second child via sibling:', controls.firstElementChild?.nextElementSibling?.id);
console.log('controls parent:', controls.parentElement?.tagName);
console.log('traversal-demo children:', traversalDemo.children);
console.log('traversal-demo first child:', traversalDemo.firstElementChild?.tagName);



// Text content vs innerHTML demo
const textDemoBtn = document.querySelector('#text-demo');
const demoOutput = document.querySelector('#demo-output');

textDemoBtn.addEventListener('click', () => {
  // Safe text content (no HTML rendering)
  demoOutput.textContent = 'This is safe text content - no HTML tags will render!';
  
  setTimeout(() => {
    // innerHTML demo (be careful with user input!)
    demoOutput.innerHTML = 'This uses <strong>innerHTML</strong> - HTML tags <em>will</em> render!';
  }, 2000);
});

// Class manipulation demo
const classDemoBtn = document.querySelector('#class-demo');
classDemoBtn.addEventListener('click', () => {
  demoOutput.classList.toggle('highlight');
  if (demoOutput.classList.contains('highlight')) {
    demoOutput.textContent = 'Class "highlight" added!';
  } else {
    demoOutput.textContent = 'Class "highlight" removed!';
  }
});

// Attribute manipulation demo
const attributeDemoBtn = document.querySelector('#attribute-demo');
let clickCount = 0;
attributeDemoBtn.addEventListener('click', () => {
  clickCount++;
  attributeDemoBtn.setAttribute('data-clicks', clickCount);
  attributeDemoBtn.setAttribute('title', `Button clicked ${clickCount} times`);
  demoOutput.textContent = `Button clicked ${clickCount} times (check button attributes!)`;
});



// Element creation and manipulation
console.log('\n📝 Additional DOM Concepts:');

// Create a new element
const newDiv = document.createElement('div');
newDiv.textContent = 'This div was created via JavaScript!';
newDiv.style.cssText = 'background: lightblue; padding: 10px; margin: 10px 0; border-radius: 5px;';

// Insert it into the concepts demo
const conceptsDemo = document.querySelector('#concepts-demo');
conceptsDemo.appendChild(newDiv);

// Style manipulation
newDiv.addEventListener('click', () => {
  newDiv.style.backgroundColor = newDiv.style.backgroundColor === 'lightblue' ? 'lightcoral' : 'lightblue';
  newDiv.textContent = newDiv.style.backgroundColor === 'lightcoral' ? 'Clicked! Background changed!' : 'This div was created via JavaScript!';
});


console.log('\n🤔 Reflection Questions:');
console.log('1. What\'s the difference between nodes and elements in the DOM?');
console.log('   Answer: Nodes are any point in the DOM tree (elements, text, comments, etc.).');
console.log('   Elements are specific types of nodes that represent HTML elements.');
console.log('');
console.log('2. When would you prefer classList vs. setting style directly?');
console.log('   Answer: Use classList for reusable styles and better maintainability.');
console.log('   Use direct style for one-off changes or dynamic values.');
console.log('');
console.log('3. How does event delegation reduce the number of event listeners?');
console.log('   Answer: Instead of attaching listeners to each child element,');
console.log('   you attach one listener to a parent and use event.target to handle events.');


