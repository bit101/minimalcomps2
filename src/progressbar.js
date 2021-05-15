export class ProgressBar extends Component {
  constructor(parent, x, y, progress, max) {
    super(parent, x, y);
    this._progress = progress;
    this._max = max;

    this.createChildren();
    this.createStyle();

    this.setSize(100, 15);
    this.updateBar();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  createChildren() {
    this.setWrapperClass("MinimalProgressBar");
    this.fill = this.createDiv(this.wrapper, "MinimalProgressBarFill");
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = `
      .MinimalProgressBar {
        ${Style.baseStyle}
        ${Style.shadowStyle}
        background-color: #ccc;
        border-radius: 0;
        height: 100%;
        width: 100%;
      }
      .MinimalProgressBarDisabled {
        ${Style.baseStyle}
        ${Style.shadowStyle}
        ${Style.disabledStyle}
        background-color: #ccc;
        border-radius: 0;
        height: 100%;
        width: 100%;
      }
      .MinimalProgressBarFill {
        ${Style.baseStyle}
        background-color: #fff;
        border: 1px solid #999;
        height: 100%;
      }
      .MinimalProgressBarFillDisabled {
        ${Style.baseStyle}
        ${Style.disabledStyle}
        background-color: #fff;
        border: 1px solid #999;
        height: 100%;
      }
    `;
    this.shadowRoot.append(style);
  }

  //////////////////////////////////
  // General
  //////////////////////////////////
  
  updateBar() {
    let percent = this.progress / this.max;
    percent = Math.max(0, percent);
    percent = Math.min(1, percent);
    this.fill.style.width = percent * this.width + "px";
  }

  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////

  get enabled() {
    return super.enbled;
  }

  set enabled(enabled) {
    super.enabled = enabled;
    if (this._enabled) {
      this.setWrapperClass("MinimalProgressBar");
      this.fill.setAttribute("class", "MinimalProgressBarFill");
    } else {
      this.setWrapperClass("MinimalProgressBarDisabled");
      this.fill.setAttribute("class", "MinimalProgressBarFillDisabled");
    }
  }
  
  get max() {
    return this._max;
  }

  set max(max) {
    this._max = max;
    let progress = Math.min(this.progress, this.max);
    this.progress = Math.max(progress, 0);
    this.updateBar();
  }

  get progress() {
    return this._progress;
  }

  set progress(progress) {
    progress = Math.min(progress, this.max);
    progress = Math.max(progress, 0);
    this._progress = progress;
    this.updateBar();
  }

}

customElements.define("minimal-progressbar", ProgressBar);


