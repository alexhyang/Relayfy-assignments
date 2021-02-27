# Instructions
The site can be run in three ways:
1. Open site folder in VSCode or any other editor and a live server plugin.
2. Use the default nodejs server or explicitely running server.js. Will not work without node and dependencies installed.
3. Use the gulp command. -> Will not work without node and dependencies installed.

You can feel free to update the gulp file to watch changes to the file and update browser.

---
# Assignment 1 solutions
## Primary Objective
1. added heading style to "Super Burger" (site/css/main.css)
2. fixed "menu display" functionality by calling listview refresh method (site/js/main.js, line 67)

## Secondary Objective
1. aligned item images (site/css/main.css)
2. improved UX
    1. fixed the bug where paybutton gets disabled after removing one item when  multiple items are selected (site/js/main.js, line 106)
    2. made collapsible expanded by default when new items are selected (site/index.html, line 27)
3. thoughts about further improvement
    1. to create a "Clear All" button, which will removed all selected items when clicked
    2. to show the price of Grilled Chicken Burger when a certain size is selected

## Tools used
- Operating System: Windows_NT x64 10.0.19041
- Editor: VS Code (v1.53.2)
- HTTP Server: Node.js (v12.18.3)
- Browser and debugging tools: Chrome (v87.0.4280.141), Firefox (v86.0)

---
# Assignment 2 solutions
demo restaurant page: https://relayfy.ca/ecashier/?menu=freshous

Potential improvements:
1. layout:
    1. The names of items should be more stressed, and the detailed options of each item should be less stressed. Use bold font and greater font size for names and normal text for options.
    2. Place images on the left side to improve visual experience.
    3. Item description and price not fully shown if users are on mobile devices (such as iPhone X and Galaxy S5). Change the design to list options vertically within each item. Highlight prices by increasing font size and using darker color.
    4. Remove the buttons for dish types to avoid unnecessary taps. Place all items in a single page with types of items in current view floating at top of screen.
    5. Remove stripped style for menu consistency, add visible divisions or more white space between items.
    6. Summary of order takes up too much space (up to one half of the screen) when fully expanded. Redesign to make it simple and tight.

2. user action:
    1. Special request should popup right before payment not when adding the first item.
    2. Receipt should be saved in user's personal account automatically after payment is completed.
    