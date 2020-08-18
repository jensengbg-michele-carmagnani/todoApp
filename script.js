/*
Todo app specification

-Add todo
-Check Todo
-Remove Todo
-View todos in a nice gui
-Filter Todos
-Persisten storage

-Chenge order

*/
let add = document.querySelector("button");

let app = {
  //model
  todos: [],
  //controller / methods
  addTodo(text = "") {
    let todo = {
      text: text,
      done: false,
    };
    this.todos.push(todo);

    this.upadeteUI();
  },

  upadeteUI() {
    // set index
    let index = 0;
    //clear the todo element
    document.querySelector("#todos").innerHTML = "";

    for (let todo of this.todos) {
      console.log(todo);
      // create li
      let el = document.createElement("li");

      // create checkbox and set the attribute
      let checkbox = document.createElement("input");
      // create data attribute
      checkbox.setAttribute("data-index", index);
      // create and span for text
      let text = document.createElement("span");
      // add text to text el
      text.innerHTML = todo.text;
      // set type to checkbox
      checkbox.setAttribute("type", "checkbox");
      // change the status of checkbox
      checkbox.checked = todo.done;
      //insert text to li el
      el.appendChild(text);
      //insert checkbox to el
      el.appendChild(checkbox);
      // add li to the todos ul
      document.querySelector("#todos").appendChild(el);
      // add ears to li
      el.addEventListener("change", (e) => {
        this.done(e.target);
      });
      index++;
    }
  },
  done(el) {
    //what index?
    let index = el.getAttribute("data-index");
    console.log(index);

    //udate obj in todo array
    this.todos[parseInt(index)].done = !this.todos[parseInt(index)].done;

    // Trigger updateUi
    this.upadeteUI();
  },
};

// addEvent
add.addEventListener("click", () => {
  // read input field
  let todo = document.querySelector("#todo");

  // Add input field to addTodo method
  app.addTodo(todo.value);
  console.log(app);
  // Clear input
  todo.value = "";
});
