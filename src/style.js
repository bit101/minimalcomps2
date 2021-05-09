export class Style {
  static baseStyle = `
    box-sizing: border-box;
    position: absolute;
    font: 10px sans-serif;
  `;
  static disabledStyle = ` 
    cursor: default;
    opacity: 0.5;
    user-select: none;
  `;
  static focusStyle = `
    outline: 1px solid #ccc;
    outline-offset: 2px;
  `;
  static shadowStyle = `
    box-shadow: inset 1px 1px 2px #808080;
  `;
  static textStyle = `
    background-color: #fff;
    border: none;
    color: #333;
    overflow: hidden;
    height: 100%;
    width: 100%;
  `;
  static textSelectionStyle = `
    background: #666;
    color: #fff;
  `;
}
