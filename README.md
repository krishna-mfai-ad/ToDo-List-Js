# ToDo-List-Js
The provided code creates a simple to-do list application using JavaScript, HTML, and CSS. Here's a breakdown of the functionality:

## HTML Structure

The HTML structure includes:
- A container div with the class "container" to hold the entire application
- An h1 element for the title "To-Do List"
- A paragraph element with the text "Note Down Your Works To Do it!"
- An input field with the id "inputBox" for entering new tasks
- A button with the text "Add Task" and an onclick attribute that calls the "add()" function when clicked
- An unordered list (ul) with the id "listContainer" to hold the to-do list items
- A sample list item (li) with a checkbox, task text, and a delete icon (img)

## CSS Styling

The CSS styles are defined in the index.css file and include:
- Importing the "Teachers" font from Google Fonts
- Setting the body, html, and h1 elements to have no padding or margin
- Defining the styles for the .container class, including:
  - Setting the height to 100vh (viewport height) and displaying the content using flexbox
  - Centering the content vertically and horizontally
  - Adding a gap of 20px between elements
  - Setting the font family to "Teachers"
  - Setting the background color to black and text color to white
- Styling the h1 element with a text shadow effect
- Styling the input field with a larger font size, padding, rounded border, and black text color
- Styling the button with a pink background color, white text, padding, font weight, and rounded border
- Removing the list style for the ul element
- Displaying the list items (li) in a row with a gap of 5px between elements

## JavaScript Functionality

The JavaScript code is defined in the index.js file and includes two functions:

1. **add()** function:
   - Selects the input field with the id "inputBox" and retrieves its value
   - Creates a new list item (li) element
   - Sets the innerHTML of the list item to include:
     - A checkbox input
     - The task text from the input field
     - An img element with the delete icon and an onclick attribute that calls the "deleteitem(event)" function when clicked
   - Appends the new list item to the unordered list with the id "listContainer"

2. **deleteitem(event)** function:
   - Takes an event parameter
   - Selects the parent element (li) of the clicked delete icon (img)
   - Removes the selected list item using the remove() method

When the user enters a task in the input field and clicks the "Add Task" button, the "add()" function is called, creating a new list item with the task text and a delete icon. Clicking the delete icon for a specific task will remove that task from the list using the "deleteitem()" function.
