import { Component } from "./component.js";

/**
 * A container that lays out its children in a vertical column with a set spacing between each child.
 * <div><img src="https://www.minimalcomps2.com/images/vbox.png"/></div>
 * @extends Component
 */
export class VBox extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this vbox to.
   * @param {number} x - The x position of the vbox.
   * @param {number} y - The y position of the vbox.
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
   * Overrides the built in appendChild method of an HTMLElement to add some very simple vertical layout to its children.
   */
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

