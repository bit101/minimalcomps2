export const Style = {};

Style.baseStyle = `
  box-sizing: border-box;
  position: absolute;
  font: 10px sans-serif;
`;

Style.disabledStyle = ` 
  cursor: default;
  opacity: 0.5;
  user-select: none;
`;

Style.focusStyle = `
  outline: 1px solid #ccc;
  outline-offset: 2px;
`;

Style.shadowStyle = `
  box-shadow: inset 1px 1px 2px #808080;
`;

Style.textStyle = `
  background-color: #fff;
  border: none;
  color: #333;
  overflow: hidden;
  height: 100%;
  width: 100%;
`;

Style.textSelectionStyle = `
  background: #666;
  color: #fff;
`;
