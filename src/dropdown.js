import { Component } from "./component.js";
import { Label } from "./label.js";
import { Style } from "./style.js";

/**
 * Provides a dropdown list of items when clicked. One of those items can then be selected and be shown in the main component.
 * <div><img src="https://www.minimalcomps2.com/images/dropdown.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 200, 200);
 * const items = ["Item 1", "Item 2", "Item 3"];
 * new Dropdown(panel, 20, 20, items, 0, event => console.log(event.target.text));
 * @extends Component
 */
export class Dropdown extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this dropdown to.
   * @param {number} x - The x position of the dropdown. Default 0.
   * @param {number} y - The y position of the dropdown. Default 0.
   * @param {array} items - An array of strings to populate the dropdown list with. Default empty array.
   * @param {number} index - The initial selected index of the dropdown. default -1.
   * @param {function} defaultHandler - A function that will handle the "change" event.
   */
  constructor(parent, x, y, items, index, defaultHandler) {
    super(parent, x, y);
    this.items = items || [];
    this._open = false;
    this.itemElements = [];
    this._text = "";
    this._dropdownPosition = "bottom";

    this._createChildren();
    this._createStyle();
    this._createListeners();

    this.setSize(100, 20);
    this._createItems();
    this.index = index;
    this._updateDropdownPosition();
    this.addEventListener("change", defaultHandler);
    this._addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  _createChildren() {
    this._setWrapperClass("MinimalDropdown");
    this.wrapper.tabIndex = 0;

    this.label = new Label(this.wrapper, 3, 3);
    this.label.autosize = false;

    this.button = this._createDiv(this.wrapper, "MinimalDropdownButton");
    this.button.textContent = "+";

    this.dropdown = this._createDiv(this.wrapper, "MinimalDropdownPanel");
  }

  _createItems() {
    for (let i = 0; i < this.items.length; i++) {
      this._createItem(i);
    }
  }

  _createItem(index) {
    const item = this._createDiv(this.dropdown, "MinimalDropdownItem");
    item.setAttribute("data-index", index);
    item.addEventListener("click", this._onItemClick);
    item.tabIndex = 0;

    const label = new Label(item, 3, 0, this.items[index]);
    label.y = (this.height - label.height) / 2;
    label.autosize = false;

    const itemObj = {item, label};
    this._updateItem(itemObj, index);
    this.itemElements.push(itemObj);
    return item;
  }

  _createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.dropdown;
    this.shadowRoot.append(style);
  }

  _createListeners() {
    this._toggle = this._toggle.bind(this);
    this._onItemClick = this._onItemClick.bind(this);
    this._onKeyPress = this._onKeyPress.bind(this);

    this.wrapper.addEventListener("click", () => {
      this._toggle();
    });
    for (let i = 0; i < this.itemElements.length; i++) {
      this.itemElements[i].addEventListener("click", this._onItemClick);
    }
    this.addEventListener("keydown", this._onKeyPress);
    this.addEventListener("blur", () => this.close());
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  _toggle() {
    this._open = !this._open;
    if (this._open) {
      this.initialZ = this.style.zIndex;
      this.style.zIndex = 1000000;
      this.dropdown.style.display = "block";
    } else {
      this.style.zIndex = this.initialZ;
      this.dropdown.style.display = "none";
    }
  }

  _onItemClick(event) {
    event.stopPropagation();
    this.index = event.currentTarget.getAttribute("data-index");
    this._toggle();
    this.dispatchEvent(new CustomEvent("change", {
      detail: {
        text: this.text,
        index: this.index,
      },
    }));
    this.wrapper.focus();
  }

  _onKeyPress(event) {
    if (event.keyCode === 13 && this.enabled) {
      // enter
      this.shadowRoot.activeElement.click();
    } else if (event.keyCode === 27) {
      // escape
      this.close();
    } else if (event.keyCode === 40) {
      // down
      if (this.shadowRoot.activeElement === this.wrapper ||
          this.shadowRoot.activeElement === this.dropdown.lastChild) {
        this.dropdown.firstChild.focus();
      } else {
        this.shadowRoot.activeElement.nextSibling.focus();
      }
    } else if (event.keyCode === 38) {
      // up
      if (this.shadowRoot.activeElement === this.wrapper ||
          this.shadowRoot.activeElement === this.dropdown.firstChild) {
        this.dropdown.lastChild.focus();
      } else {
        this.shadowRoot.activeElement.previousSibling.focus();
      }
    }
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  _updateButton() {
    this.button.style.left = this.width - this.height - 1 + "px";
    this.button.style.width = this.height + "px";
    this.button.style.height = this.height + "px";
    this.button.style.lineHeight = this.height - 1 + "px";
  }

  _updateItem(itemObj, i) {
    const { item, label } = itemObj;

    const h = this.height - 1;
    item.style.top = i * h + "px";
    item.style.width = this.width + "px";
    item.style.height = this.height + "px";
    label.y = (this.height - label.height) / 2;
    label.width = this.width - 8;
  }

  _updateDropdownPosition() {
    if (this._dropdownPosition === "bottom") {
      this.dropdown.style.top = this.height - 2 + "px";
    } else if (this._dropdownPosition === "top") {
      this.dropdown.style.top = -(this.height - 1) * this.items.length + "px";
    }
    this.dropdown.style.left = "-1px";
    this.dropdown.style.width = this.width + "px";
    this.dropdown.style.height = (this.height - 1) * this.items.length + "px";
  }

  /**
   * Adds a handler function for the "change" event on this dropdown.
   * @param {function} handler - A function that will handle the "change" event.
   * @returns This instance, suitable for chaining.
   */
  addHandler(handler) {
    this.addEventListener("change", handler);
    return this;
  }

  /**
   * Automatically changes the value of a property on a target object with the main value of this component changes.
   * @param {object} target - The target object to change.
   * @param {string} prop - The string name of a property on the target object.
   * @return This instance, suitable for chaining.
   */
  bind(target, prop) {
    this.addEventListener("change", event => {
      target[prop] = event.detail;
    });
    return this;
  }

  /**
   * Programatically closes the dropdown if it is open.
   * @returns This instance, suitable for chaining.
   */
  close() {
    this._open = true;
    this._toggle();
    return this;
  }

  /**
   * Programatically opens the dropdown if it is closed.
   * @returns This instance, suitable for chaining.
   */
  open() {
    this._open = false;
    this._toggle();
    return this;
  }

  /**
   * Gets and sets the position of the dropdown list.
   * @param {string} position - The position where the list will open. Valid values are "bottom" (default) and "top".
   * @returns This instance, suitable for chaining.
   */
  setDropdownPosition(position) {
    this.dropdownPosition = position;
    return this;
  }

  /**
   * Sets the selected index of this dropdown.
   * @param {number} index - The index to set.
   * @returns This instance, suitable for chaining.
   */
  setIndex(index) {
    this.index = index;
    return this;
  }

  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////

  /**
   * Gets and sets the position of the dropdown list. Valid values are "bottom" (default) and "top".
   */
  get dropdownPosition() {
    return this._dropdownPosition;
  }

  set dropdownPosition(pos) {
    this._dropdownPosition = pos;
    this._updateDropdownPosition();
  }

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    if (this.enabled === enabled) {
      return;
    }
    super.enabled = enabled;
    if (this.enabled) {
      this.wrapper.addEventListener("click", this._toggle);
      this.wrapper.setAttribute("class", "MinimalDropdown");
      this.button.setAttribute("class", "MinimalDropdownButton");
      this.tabIndex = 0;
    } else {
      this.wrapper.removeEventListener("click", this._toggle);
      this.wrapper.setAttribute("class", "MinimalDropdownDisabled");
      this.button.setAttribute("class", "MinimalDropdownButtonDisabled");
      this.tabIndex = -1;
      this.close();
    }
  }

  get height() {
    return super.height;
  }

  set height(height) {
    super.height = height;
    this.label.y = (this.height - this.label.height) / 2;
    this.label.width = this.width - this.height;
    this._updateButton();
    this.itemElements.forEach((item, i) => this._updateItem(item, i));
    this._updateDropdownPosition();
  }

  /**
   * Reading this property tells you the index of the currently selected item. Setting it caused the new index to be selected and the dropdown to display that item.
   */
  get index() {
    return this._index;
  }

  set index(index) {
    if (index < 0 || index >= this.items.length || index === null || index === undefined) {
      this._index = -1;
      this._text = "";
      this.label.text = "Choose...";
    } else {
      this._index = index;
      this._text = this.items[this._index];
      this.label.text = this._text;
    }
  }

  /**
   * Get the text of the currently selected item in the dropdown (read only).
   */
  get text() {
    return this._text;
  }

  get width() {
    return super.width;
  }

  set width(width) {
    super.width = width;
    this.label.width = this.width - this.height;
    this.dropdown.style.width = this.width + "px";
    this._updateButton();
    this.itemElements.forEach(item => {
      this._updateItem(item);
    });
  }
}

customElements.define("minimal-dropdown", Dropdown);

