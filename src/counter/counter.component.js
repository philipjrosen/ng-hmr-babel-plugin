import template from "./counter.html";

class CounterController {
  constructor() {
    this.counter = 10;
  }

  add() {
    this.counter += 10;
  }

  sub() {
    this.counter--;
  }
}

angular.module("hot-reload-demo").component("counter", {
  controller: CounterController,
  template
});
