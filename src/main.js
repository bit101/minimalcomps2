import { Panel, HSlider, VSlider } from "./minimalcomps.js";
// import { Button } from "./module/button.js";
// import { Label } from "./module/label.js";
// import { TextInput } from "./module/textinput.js";
// import { TextArea } from "./module/textarea.js";
// import { Checkbox } from "./module/checkbox.js";
// import { RadioButton } from "./module/radiobutton.js";
// import { RadioButtonGroup } from "./module/radiobuttongroup.js";
// import { ProgressBar } from "./module/progressbar.js";
// import { HSlider } from "./module/hslider.js";
// import { VSlider } from "./module/vslider.js";

const panel = new Panel(document.body, 40, 40, 400, 310);
const h1 = new HSlider(panel, 70, 20, 10, 0, 100)
h1.height = 5;
h1.handleSize = 5;
h1.width = 290;
h1.addLabels("Tiny 1", 50);
const h2 = new HSlider(panel, 70, 35, 30, 0, 100)
h2.height = 5;
h2.width = 290;
h2.addLabels("Tiny 2", 50);
const h3 = new HSlider(panel, 70, 50, 50, 0, 100)
h3.width = 290;
h3.addLabels("Default", 50);
const h4 = new HSlider(panel, 70, 70, 70, 0, 100)
h4.height = 20;
h4.width = 290;
h4.addLabels("Big 1", 50);
const h5 = new HSlider(panel, 70, 110, 90, 0, 100)
h5.height = 20;
h5.handleSize = 20;
h5.width = 290;
h5.addLabels("Big 2", 50);

for (let i = 0; i < 21; i++) {
  const label = String.fromCharCode(65 + i);
  const v1 = new VSlider(panel, 20 + i * 17, 170, 50 + Math.sin(i / 21 * Math.PI * 2) * 50, 0, 100);
  v1.decimals = 0;
  v1.addLabels(label, 40);
}

// const label = new Label(panel, 20, 20, "I am a label...");
// const btn = new Button(panel, 20, 40, "Click me!", onClick);
// const ti = new TextInput(panel, 20, 65, "Hello");
// const ta = new TextArea(panel, 20, 90, "Hello");
// ta.setSize(200, 50);
// ta.enabled = false;

// const cb =new Checkbox(panel, 20, 150, "Check it out", true, onCheck);
// new Checkbox(panel, 200, 150, "Check it out", true);

// new RadioButton(panel, 20, 170, "group1", "Option 1", true, onRB);
// new RadioButton(panel, 20, 190, "group1", "Option 2", false, onRB);
// const rb = new RadioButton(panel, 20, 210, "group1", "Option 3", false, onRB);

// new RadioButton(panel, 20, 240, "group1", "Option 2", false);
// rb.enabled = false;

// const pb = new ProgressBar(panel, 20, 270, 0, 100);
// pb.setSize(300, 20);
// let value = 0;
// setInterval(() => {
//   pb.value = value += 0.5;
//   if (value > pb.max) {
//     value = 0;
//   }
// }, 100);


// function onClick() {
//   cb.enabled = !cb.enabled;
//   ta.enabled = !ta.enabled;
//   ti.enabled = !ti.enabled;
//   label.enabled = !label.enabled;
// }

// function onCheck() {
//   btn.enabled = cb.checked;
// }

// function onRB() {
//   label.text = RadioButtonGroup.getValueForGroup("group1");
// }
