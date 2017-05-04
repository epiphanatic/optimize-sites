# Website Performance Optimization portfolio project


Project #4 of Udacity's Front-End Web Developer Nanodegree. The task was to optimize a provided website with a number of optimization and performance-related issues so that:
 1) index.html achieves target PageSpeed score of at least 90 for mobile devices and desktops
 2) pizza.html renders with a consistent 60 frames per second when scrolling.
 3) Time to resize pizzas is less than 5 ms using the pizza size slider on the views/pizza.html page.
 
 ## File Structure
 
 ### app/
 Contains all production (minified) code with the same structure as the root project.
 
 ### everything outside of app/
 
 Contains development code and structure is identical to files and directories inside app/
 
## Dependencies
   
   1) You must have python installed in order to start the site
   
   See instructions [here](https://classroom.udacity.com/nanodegrees/nd004/parts/0041345401/modules/356120945175460/lessons/990110642/concepts/36256587390923#) for Mac.
   
   See instructions [here](https://classroom.udacity.com/nanodegrees/nd004/parts/0041345401/modules/356120945175460/lessons/990110642/concepts/36691786570923#) for Windows.
 
## Starting the app
 
1) Clone this repository or download the zip file.

2) In a command line, go to the project directory on your computer (wherever your cloned it to, or extracted the zip file) and type:
```
python -m SimpleHTTPServer 8080
```

3) Now go to your browser and navigate to
```
http://localhost:8080/app/index.html
```
for the index page, or 
```
http://localhost:8080/app/views/pizza.html
```
for the pizza page

## PageSpeed Usage with this app

1) Download and install ngrok to the top-level of the project directory to make your local server accessible remotely.
2) In a command line, go to the project directory on your computer (wherever your cloned it to, or extracted the zip file) and type:
```
./ngrok http 8080
```
3) Copy the public URL ngrok gives you, append the specific page that you'd like to look at, ie: 
```
http://<ngrokUrl>/app/index.html)
```
and run it through PageSpeed Insights [here](https://developers.google.com/speed/pagespeed/insights)

You should get a result of over 90.

## Optimizations

### index.html page

#### HTML
Minified file

#### CSS

Inlined all of the CSS into the head of the document and added the HTML media="print" attribute to the external style sheet link for print styles.

#### JS

Added the HTML async attribute to all script tags

Minified files

####Images

Resized and compressed images

### pizza.html and main.js

#### HTML
Minified file

#### CSS

Inlined all of the CSS into the head of the document and added the HTML media="print" attribute to the external style sheet link for print styles.

Defer loading of bootstrap using helper.js

Minified bootstrap file

#### JS

Added the HTML async or defer (where appropriate) attribute to all script tags

Moved all redundant calls to the DOM (e.g. document.querySelector(#movingPizzas1)), as well as calculation functions (e.g. Math.sin) out of for loops.

Reduced number of sliding pizzas.

Removed redundant array initializations (e.g. randomCrust)

Changed all instances of querySelector to the more efficient getElementById and getElementByClassName depending on whether a class or id is needed.

To improve scrolling, moved 
```
items = document.getElementsByClassName('mover');
```
to DOMContentLoaded and initialized items in the global scope, taking it out of the updatePosition function. This keeps items from being reinitialized every time the user scrolls.

