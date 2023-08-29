# Landscaper-Game
A clicker game where the user needs to acquire a certain amount of points to win!

I created this game using HTML, CSS, and Javascript. The javascript used was a way to practice using DOM manipulation, functions, variables, data structures, conditional statements, loops, objects, event handlers, scopes, string manipulation, and boolean logic in javascript.

Skill List and demonstrations: 

-Variables and Objects: The user object holds the player's totalMoney. Other variables (useTeeth, money, etc.) are used to store references to DOM elements.

-DOM Manipulation: The code interacts with the Document Object Model (DOM) using document.querySelector to select and manipulate HTML elements.

-Event Handling: The code uses event listeners (addEventListener) to respond to user interactions (button clicks).

-Functions: Functions like updateMoney, buyItem, and useItem encapsulate specific functionalities, making the code modular.

-Conditional Statements: Conditional statements (if, if...else) control the game's flow based on conditions, like when to display alerts or buttons.

-Loops: The code employs forEach loops to iterate over arrays (gameItems) and attach event listeners to corresponding buttons.

-String Manipulation: The code constructs CSS class names dynamically using template literals (. + item.name).

-Alerts: The alert function is used to provide messages to the player at specific points in the game.

-Boolean Logic: Boolean variables (alertStatusForS, alertStatusForL, etc.) are used to track whether alerts have been shown to avoid repetition.

-Updating HTML Content: The textContent property is used to update the displayed player's total money.

-Game Logic: The code implements game mechanics such as earning money, buying items, and reaching milestones.

-Event Delegation: Event listeners are attached to parent elements (like .button-container and .buy-options) to manage button clicks efficiently.

-Global Variables: Variables like gameOver are used to control the game's state.

-Encapsulation and Abstraction: The code separates concerns by encapsulating functionalities into functions and abstracting away complex operations.

-Responsive Design: The use of responsive units (em, %) in CSS and the viewport meta tag in HTML ensures the game is displayed well on various devices.

-Styling: The game's styling is handled through a separate CSS file (style.css).