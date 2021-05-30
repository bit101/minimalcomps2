import { Component } from "./component.js";

/**
 * A container that lays out its children in a vertical column with a set spacing between each child.
 * <div><img src="https://www.minimalcomps2.com/images/vbox.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 200, 200);
 * const vbox = new VBox(panel, 20, 20, 10);
 * new Button(vbox, 0, 0, "Button 1");
 * new Button(vbox, 0, 0, "Button 2");
 * new Button(vbox, 0, 0, "Button 3");
 * @extends Component
 */
export class VBox extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this vbox to.
   * @param {number} x - The x position of the vbox. Default 0.
   * @param {number} y - The y position of the vbox. Default 0.
   * @param {number} spacing - The space to put in between each element in the box. Default 0.
   */
  constructor(parent, x, y, spacing) {
    super(parent, x, y);
    this.spacing = spacing || 0;
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

