const $ = document;
// Create element for cursor
const cursor = $.createElement("span");
cursor.classList.add("cursor");

// Create element for cursor follower
const cursorFollower = $.createElement("span");
cursorFollower.className = "cursor cursor__follower";

// Add elemnts to html
$.querySelector("html").append(cursor, cursorFollower);

// Add mouse move event listener
window.addEventListener("mousemove", (event) => {
  setPosition(cursor, event.clientX, event.clientY);
  setPosition(cursorFollower, event.clientX, event.clientY);
});

// Set the same position of mouse cursor to elements
function setPosition(element, x, y) {
  element.style.transform = `translate(${x}px,${y}px)`;
}
