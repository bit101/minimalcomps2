import { Component } from "./component.js";
import { Label } from "./label.js";
import { Style } from "./style.js";

export class Dropdown extends Component {
  constructor(parent, x, y, items, index, defaultHandler) {
    super(parent, x, y);
    this.items = items;
    this._open = false;
    this.itemElements = [];
    this._index = -1;
    this._text = "";

    this.createChildren();
    this.createStyle();
    this.createListeners();

    this.setSize(100, 20);
    this.createItems();
    this.index = index;
    this.addEventListener("change", defaultHandler);
    this.addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  createChildren() {
    this.setWrapperClass("MinimalDropdown");
    this.wrapper.tabIndex = 0;

    this.label = new Label(this.wrapper, 3, 3);

    this.button = this.createDiv(this.wrapper, "MinimalDropdownButton");
    this.button.textContent = "+";

    this.dropdown = this.createDiv(this.wrapper, null);
    this.dropdown.style.display = "none";
  }

  createItems() {
    for (let i = 0; i < this.items.length; i++) {
      this.createItem(i);
    }
  }

  createItem(index) {
    const item = this.createDiv(this.dropdown, "MinimalDropdownItem");
    item.setAttribute("data-index", index);
    item.addEventListener("click", this.onItemClick);
    item.tabIndex = 0;

    const label = new Label(item, 3, 0, this.items[index]);
    label.y = (this.height - label.height) / 2;

    const itemObj = {item, label};
    this.updateItem(itemObj, index);
    this.itemElements.push(itemObj);
    return item;
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.dropdown;
    this.shadowRoot.append(style);
  }

  createListeners() {
    this.toggle = this.toggle.bind(this);
    this.onItemClick = this.onItemClick.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onDocumentClick = this.onDocumentClick.bind(this);

    this.wrapper.addEventListener("click", this.toggle);
    for (let i = 0; i < this.itemElements.length; i++) {
      this.itemElements[i].addEventListener("click", this.onItemClick);
    }
    this.addEventListener("keydown", this.onKeyPress);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  toggle(event) {
    event && event.stopPropagation();
    this._open = !this._open;
    if (this._open) {
      this.initialZ = this.style.zIndex;
      this.style.zIndex = 1000000;
      this.dropdown.style.display = "block";
      document.addEventListener("click", this.onDocumentClick);
    } else {
      this.style.zIndex = this.initialZ;
      this.dropdown.style.display = "none";
      document.removeEventListener("click", this.onDocumentClick);
    }
  }

  onItemClick(event) {
    event.stopPropagation();
    this.index = event.target.getAttribute("data-index");
    this.toggle();
    this.dispatchEvent(new CustomEvent("change", {
      detail: {
        text: this.text,
        index: this.index,
      },
    }));
    this.wrapper.focus();
  }

  onKeyPress(event) {
    if (event.keyCode === 13 && this.enabled) {
      // enter
      this.shadowRoot.activeElement.click();
    } else if (event.keyCode === 27 || event.keyCode === 9) {
      // escape || tab
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

  onDocumentClick(event) {
    if (event.target.className !== "MinimalDropdownItem") {
      this.close();
    }
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  close() {
    this._open = true;
    this.toggle();
  }

  open() {
    this._open = false;
    this.toggle();
  }

  updateButton() {
    this.button.style.left = this.width - this.height + "px";
    this.button.style.width = this.height + "px";
    this.button.style.height = this.height + "px";
    this.button.style.lineHeight = this.height - 1 + "px";
  }

  updateItem(itemObj, i) {
    const { item, label } = itemObj;

    const h = this.height - 1;
    item.style.top = h + i * h + "px";
    item.style.width = this.width + "px";
    item.style.height = this.height + "px";
    if (item.firstChild) {
      label.y = (this.height - label.height) / 2;
    }
  }

  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    if (this.enabled === enabled) {
      return;
    }
    super.enabled = enabled;
    if (this.enabled) {
      this.wrapper.addEventListener("click", this.toggle);
      this.wrapper.setAttribute("class", "MinimalDropdown");
      this.button.setAttribute("class", "MinimalDropdownButton");
      this.tabIndex = 0;
    } else {
      this.wrapper.removeEventListener("click", this.toggle);
      this.wrapper.setAttribute("class", "MinimalDropdownDisabled");
      this.button.setAttribute("class", "MinimalDropdownButtonDisabled");
      this.tabIndex = -1;
      this._open = false;
      this.style.zIndex = this.initialZ;
      this.dropdown.style.display = "none";
    }
  }

  get height() {
    return super.height;
  }

  set height(height) {
    super.height = height;
    this.label.y = (this.height - this.label.height) / 2;
    this.updateButton();
    this.itemElements.forEach((item, i) => this.updateItem(item, i));
  }

  get index() {
    return this._index;
  }

  set index(index) {
    if (index >= 0 && index < this.items.length) {
      this._index = index;
      this._text = this.items[this._index];
      this.label.text = this._text;
    }
  }

  get text() {
    return this._text;
  }

  get width() {
    return super.width;
  }

  set width(width) {
    super.width = width;
    this.updateButton();
    this.itemElements.forEach(item => {
      this.updateItem(item);
    });
  }
}

customElements.define("minimal-dropdown", Dropdown);

