/* global Vue, axios */
var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello from JavaScript!",
      message2: "This is the input box text",
      seen: true,
      animals: ["dog", "cat", "fish"],
      newAnimal: "",
      todos: []
    };
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
    },
    showMore: function() {
      if (this.seen === true) {
        this.seen = false;
      } else {
        this.seen = true;
      }
    },
    loadTodos: function() { 
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then(response => {
          console.log(response.data);
          this.todos = response.data;
        });
    }
  }
});