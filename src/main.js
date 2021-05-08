import { Panel } from "./module/panel.js";
// import { Button } from "./module/button.js";
import { Label } from "./module/label.js";
// import { TextInput } from "./module/textinput.js";
// import { TextArea } from "./module/textarea.js";
// import { Checkbox } from "./module/checkbox.js";
// import { RadioButton } from "./module/radiobutton.js";
// import { RadioButtonGroup } from "./module/radiobuttongroup.js";
// import { ProgressBar } from "./module/progressbar.js";
import { HSlider } from "./module/hslider.js";
import { VSlider } from "./module/vslider.js";

const panel = new Panel(document.body, 40, 40, 400, 400);
new HSlider(panel, 20, 20, 50, 0, 100, (val) => label1.text = val);
const label1 = new Label(panel, 130, 19, 50);

const s = new VSlider(panel, 20, 40, 50, 0, 100, (val) => {
  label2.text = val;
  label2.x = s.x + (s.width - label2.width) / 2;
})
const label2 = new Label(panel, 15, 150, 50);



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
