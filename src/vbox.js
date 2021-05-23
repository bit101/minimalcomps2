import { Component } from "./component.js";

export class VBox extends Component {
  constructor(parent, x, y, spacing) {
    super(parent, x, y);
    this.spacing = spacing;
    this.xpos = 0;
    this.ypos = 0;
    this.createChildren();
    this.setSize(0, 0);
    this.addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  createChildren() {
    this.setWrapperClass("MinimalVbox");
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  appendChild(child) {
    super.appendChild(child);
    if (this.ypos > 0) {
      this.ypos += this.spacing;
    }
    child.y = this.ypos;
    this.width = Math.max(this.width, child.x + child.width);
    this.ypos += child.height;
    this.height = this.ypos;
  }
}

customElements.define("minimal-vbox", VBox);

