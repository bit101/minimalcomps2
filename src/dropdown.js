export class Dropdown extends Component {
  constructor(parent, x, y, items, defaultHandler) {
    super(parent, x, y);
    this._items = items;
    this._open = false;
    this._itemElements = [];
    this._text = "";

    this.createChildren();
    this.createStyle();
    this.createListeners();

    this.setSize(100, 20);
    this.addEventListener("change", defaultHandler);
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////
  
  createChildren() {
    this.wrapper = document.createElement("div");
    this.wrapper.setAttribute("class", "MinimalDropdown");
    this.wrapper.tabIndex = 0;
    this.shadowRoot.append(this.wrapper);

    this.label = new Label(this.wrapper, 3, 3);
    this.button = document.createElement("div");
    this.button.setAttribute("class", "MinimalDropdownButton");
    this.button.textContent = "+";
    this.wrapper.appendChild(this.button);

    this.dropdown = document.createElement("div");
    this.dropdown.style.display = "none";
    this.shadowRoot.append(this.dropdown);

    for (let i = 0; i < items.length; i++) {
      let item = document.createElement("div");
      item.setAttribute("class", "MinimalDropdownItem");
      item.style.top = 19 + i * 19 + "px";
      this._itemElements.push(item);
      let label = new Label(item, 0, 0, items[i]);
      label.move(3, 4);
      this.dropdown.appendChild(item);
    }
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = `
      .MinimalDropdown,
      .MinimalDropdownDisabled {
        ${Style.baseStyle}
        background-color: #fff;
        border-radius: 0;
        border: 1px solid #999;
        cursor: pointer;
        height: 100%;
        overflow: hidden;
        width: 100%;
        cursor: pointer;
      }
      .MinimalDropdownDisabled {
        ${Style.disabledStyle}
      }
      .MinimalDropdown:focus {
        ${Style.focusStyle}
      }
      .MinimalDropdownButton {
        ${Style.baseStyle}
        background-color: #eee;
        border-radius: 0;
        border: 1px solid #999;
        height: 20px;
        width: 20px;
        left: 80px;
        top: -1px;
        text-align: center;
      }
      .MinimalDropdownItem {
        width: 100px;
        height: 20px;
        ${Style.baseStyle}
        background-color: #fff;
        border-radius: 0;
        border: 1px solid #999;
        cursor: pointer;
      }
      .MinimalDropdownItem:hover {
        background-color: #f8f8f8;
      }
    `;
    this.shadowRoot.append(style);
  }

  createListeners() {
    this.toggle = this.toggle.bind(this);
    this.onItemClick = this.onItemClick.bind(this);

    this.wrapper.addEventListener("click", this.toggle);
    for (let i = 0; i < this._itemElements.length; i++) {
      this._itemElements[i].addEventListener("click", this.onItemClick);
    }
    // this.button.addEventListener("keypress", this.onKeyPress);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  toggle(event) {
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

  onItemClick(event) {
    this._text = event.target.firstChild.text;
    this.label.text = this._text
    this.toggle();
    this.dispatchEvent(new Event("change"));
  }

  // onKeyPress(event) {
  //   if (event.keyCode == 13 && this.enabled) {
  //     this.click();
  //   }
  // }

  //////////////////////////////////
  // General
  //////////////////////////////////

  get width() {
    return super.width;
  }

  set width(width) {
    super.width = width;
    this.button.style.left = this.width - this.height + "px";
    for (let i = 0; i < this._itemElements.length; i++) {
      this._itemElements[i].style.width = this.width + "px";
    }
  }

  get height() {
    return super.height;
  }

  set height(height) {
    super.height = height;
    this.label.y = (this.height - this.label.height) / 2;
    this.button.style.left = this.width - this.height + "px";
    this.button.style.width = this.height + "px";
    this.button.style.height = this.height + "px";
    for (let i = 0; i < this._itemElements.length; i++) {
      this._itemElements[i].style.top = this.height - 1 + i * (this.height - 1) + "px";
      this._itemElements[i].style.height = this.height + "px";
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
    super.enabled = enabled;
    this.label.enabled = enabled;
    this.button.enabled = enabled;
  }

  get text() {
    return this._text;
  }

}

customElements.define("minimal-dropdown", Dropdown);

