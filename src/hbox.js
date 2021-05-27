import { Component } from "./component.js";

/**
 * A container that lays out its children in a horizontal row with a set spacing between each child.
 * <div><img src="https://www.minimalcomps2.com/images/hbox.png"/></div>
 * @extends Component
 */
export class HBox extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this hbox to.
   * @param {number} x - The x position of the hbox.
   * @param {number} y - The y position of the hbox.
   * @param {number} spacing - The space to put in between each element in the box.
   */
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

  /**
   * Overrides the built in appendChild method of an HTMLElement to add some very simple horizontal layout to its children.
   */
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

