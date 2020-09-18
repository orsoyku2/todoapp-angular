export class Model {
  user;
  items;
  constructor() {
    this.user = "oyku";
    this.items = [
      new TodoItem("Sport", true),
      new TodoItem("Music", false),
      new TodoItem("Art", false),
      new TodoItem("Food", true)
    ]
  }
}
export class TodoItem {
  description;
  action;
  constructor(description, action) {
    this.description = description;
    this.action = action;
  }
}
