import { Panel, Button, Checkbox, Label, ProgressBar, RadioButton, TextInput, TextArea, HSlider, VSlider, ColorPicker, NumericStepper, Dropdown } from "./minimalcomps.mjs";

const panel = new Panel(document.body, 40, 40, 400, 400);

btn = new Button(panel, 20, 20, "Button")
console.log(btn);
new Checkbox(panel, 20, 50, "Checkbox");
new RadioButton(panel, 20, 80, "group", "RadioButton 1", true);
new RadioButton(panel, 20, 100, "group", "RadioButton 2", false);
new RadioButton(panel, 20, 120, "group", "RadioButton 3", false);
new Label(panel, 20, 150, "Label");
new ProgressBar(panel, 20, 180, 30, 100);
new TextInput(panel, 20, 210, "TextInput");
new TextArea(panel, 20, 240, "TextArea");
new HSlider(panel, 60, 370, 40, 0, 100).addLabels("HSlider");
new VSlider(panel, 165, 230, 40, 0, 100).addLabels("VSlider");

new ColorPicker(panel, 250, 20, "#f00");
new NumericStepper(panel, 250, 50, 20, 0, 100);
const stuff = ["one", "two", "three", "four", "five"];
new Dropdown(panel, 250, 80, stuff);
