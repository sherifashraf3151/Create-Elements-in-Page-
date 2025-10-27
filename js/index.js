// Dom
let form = document.getElementsByTagName("form")[0];
let number = document.querySelector(" [ name='elements' ] ");
let text = document.querySelector(" [ name='texts' ] ");
let type = document.getElementsByTagName("select")[0];
let submit = document.querySelector("[ type='submit' ]");
let results = document.querySelector(".results");

// Stop Submit Action
form.onsubmit = function (event) {
  event.preventDefault();
  // Make The results Div is Clear After Every Submit
  results.innerHTML = "";
  // Create The Element 
  for (let i = 1; i <= number.value; i++) {
    let element = document.createElement(type.value.toLowerCase());
    element.textContent = text.value + " " + i;
    element.classList.add("box");
    element.title = "Element";
    element.id = `id-${i}`;
    element.style.cssText = `
      background: blue;
      font-size: bold
      width: 100%;
      padding: 10px;
      margin-top: 10px;
      border: 1px solid #ccc;
      color: white;
    `;
    // Add Element to Results Div
    results.appendChild(element);
  }
};

