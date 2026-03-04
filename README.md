# Image Slider Project

A sleek, responsive image slider built using HTML, CSS, and Vanilla JavaScript. It features smooth transitions and navigation controls to browse through a collection of images.

## Features

* **Smooth Transitions:** Uses CSS `transform` and `transition` properties for fluid horizontal sliding.
* **Navigation Controls:** Includes "Next" and "Previous" icons powered by Font Awesome.
* **Infinite Loop:** Automatically resets to the first image after the last one, and vice versa.
* **Dynamic Styling:** Centered layout with a modern "wheat" background and shadow effects.

## Technologies Used

* **HTML5:** Semantic structure for the slider container.
* **CSS3:** Flexbox layout, absolute positioning for buttons, and transition effects.
* **JavaScript (ES6):** DOM manipulation and event listeners to handle image logic.
* **Font Awesome:** Iconography for navigation arrows.

## How to Run

1. **Clone the files:** Save the HTML, CSS, and JS code into `index.html`, `style.css`, and `index.js`.
2. **Open in Browser:** Double-click the `index.html` file to view the project.

## Project Structure

* `index.html` - The markup for the slider and image container.
* `style.css` - Styles for the layout, buttons, and animations.
* `index.js` - Logic for calculating the `translateX` value based on the current image index.

## Logic Overview

The slider works by shifting the `.image-container` horizontally using the following formula:
`translateX(-${(currentImage - 1) * 200}px)`

This moves the container by the width of one image (200px) multiplied by the current index.
