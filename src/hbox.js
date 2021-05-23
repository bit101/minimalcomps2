import { Component } from "./component.js";

export class HBox extends Component {
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
    if (this.xpos > 0) {
      this.xpos += this.spacing;
    }
    child.x = this.xpos;
    this.height = Math.max(this.height, child.y + child.height);
    this.xpos += child.width;
    this.width = this.xpos;
  }
}

customElements.define("minimal-hbox", HBox);

