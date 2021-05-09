import { Panel, RadioButton, RadioButtonGroup, Checkbox } from "./minimalcomps.js";

const panel = new Panel(document.body, 40, 40, 400, 310);

for (let i = 0; i < 5; i++) {
  window["rb" + i] = new RadioButton(panel, 20, 20 + i * 20, "foo", "foo " + i, true, () => {
  })
}

